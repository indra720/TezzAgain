import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  User,
  FileText,
  CreditCard,
  Building2,
  Users,
  Check,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Upload,
  AlertCircle,
  ShieldCheck,
  Send,
  Eye,
} from 'lucide-react';
import { PageHeader } from '../components/layout/PageHeader';
import { SectionDivider } from '../components/ui/SectionDivider';
import { toast } from 'sonner';

export const RegisterPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Form State
  const [formData, setFormData] = useState({
    // Step 1: Basic Details
    fullName: '',
    mobile: '',
    otp: '',
    otpSent: false,
    city: 'Indore',
    userCategory: 'Zomato/Swiggy Delivery Partner',

    // Step 2: Documents
    panNumber: '',
    aadhaarNumber: '',
    dlNumber: '',
    panFileUploaded: false,
    aadhaarFileUploaded: false,
    dlFileUploaded: false,

    // Step 3: Bank Details
    accountNumber: '',
    ifscCode: '',
    bankName: '',
    accountHolder: '',

    // Step 4: Nominee & Terms
    nomineeName: '',
    nomineeRelation: 'Spouse',
    nomineePhone: '',
    agreedToTerms: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  // Fake Send OTP Toast
  const handleSendOtp = () => {
    if (!/^\d{10}$/.test(formData.mobile.trim())) {
      toast.error('Please enter a valid 10-digit mobile number before requesting OTP.');
      return;
    }
    setFormData({ ...formData, otpSent: true });
    toast.success('OTP sent successfully!', {
      description: `6-digit test code 449210 sent to +91 ${formData.mobile}. (Auto-filled for testing)`,
    });
    // Auto-fill OTP for smooth demo
    setTimeout(() => {
      setFormData((prev) => ({ ...prev, otp: '449210' }));
    }, 400);
  };

  // Validation per step
  const validateStep = (step: number): boolean => {
    const errs: Record<string, string> = {};

    if (step === 1) {
      if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
      if (!/^\d{10}$/.test(formData.mobile.trim())) errs.mobile = 'Enter a valid 10-digit mobile number';
      if (!formData.otpSent || formData.otp.length < 4) errs.otp = 'Please send & enter verification OTP';
    } else if (step === 2) {
      // PAN regex: ^[A-Z]{5}[0-9]{4}[A-Z]$
      const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
      if (!panRegex.test(formData.panNumber.trim().toUpperCase())) {
        errs.panNumber = 'Invalid PAN format. Must be e.g. ABCDE1234F';
      }
      // Aadhaar: 12 digits
      const aadhaarClean = formData.aadhaarNumber.replace(/\s+/g, '');
      if (!/^\d{12}$/.test(aadhaarClean)) {
        errs.aadhaarNumber = 'Aadhaar must be exactly 12 digits';
      }
      // DL: at least 6 characters
      if (formData.dlNumber.trim().length < 6) {
        errs.dlNumber = 'Valid Driving Licence number required';
      }
    } else if (step === 3) {
      if (!formData.accountNumber.trim() || formData.accountNumber.length < 8) {
        errs.accountNumber = 'Valid bank account number required';
      }
      if (!formData.ifscCode.trim() || formData.ifscCode.length < 9) {
        errs.ifscCode = 'Valid 11-digit IFSC code required (e.g. SBIN0001234)';
      }
      if (!formData.accountHolder.trim()) {
        errs.accountHolder = 'Beneficiary account holder name required';
      }
    } else if (step === 4) {
      if (!formData.nomineeName.trim()) {
        errs.nomineeName = 'Nominee name is required for insurance record';
      }
      if (!formData.agreedToTerms) {
        errs.agreedToTerms = 'You must agree to the TezzEV rental terms';
      }
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => prev + 1);
      window.scrollTo({ top: 300, behavior: 'smooth' });
    } else {
      toast.error('Please correct the highlighted fields before proceeding.');
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(1, prev - 1));
  };

  const stepsList = [
    { num: 1, title: 'Basic Details' },
    { num: 2, title: 'KYC Documents' },
    { num: 3, title: 'Bank Info' },
    { num: 4, title: 'Nominee & Terms' },
    { num: 5, title: 'Review & Submit' },
  ];

  return (
    <div className="w-full">
      <PageHeader
        breadcrumbs={[{ label: 'Rider Registration' }]}
        title="Rider Onboarding Wizard"
        highlightWord="Wizard"
        subtitle="Complete your paperless verification in under 5 minutes. No advance fee charged."
      />

      {/* WAVE DIVIDER: Deep Navy to Sky-200 */}
      <SectionDivider type="navy-to-sky200" />

      {/* Main Wizard Area (Sky-200) */}
      <section className="bg-sky-200 text-text-light section-pad">
        <div className="container-custom max-w-4xl mx-auto">
          {/* Progress Tracker */}
          <div className="mb-10 tezz-card p-4 sm:p-6 bg-white">
            <div className="flex items-center justify-between mb-3 text-xs sm:text-sm font-semibold text-navy-950">
              <span>Step {currentStep} of 5: {stepsList[currentStep - 1]?.title}</span>
              <span className="text-royal font-bold">{Math.round((currentStep / 5) * 100)}% Completed</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-brand transition-all duration-300"
                style={{ width: `${(currentStep / 5) * 100}%` }}
              />
            </div>

            {/* Step Indicators */}
            <div className="hidden sm:grid grid-cols-5 gap-2 mt-4 text-center">
              {stepsList.map((st) => (
                <div key={st.num} className="text-xs">
                  <div
                    className={`w-7 h-7 mx-auto rounded-full flex items-center justify-center font-bold mb-1 transition-colors ${
                      currentStep === st.num
                        ? 'bg-royal text-white shadow-md'
                        : currentStep > st.num
                        ? 'bg-leaf text-navy-950'
                        : 'bg-slate-100 text-slate-400'
                    }`}
                  >
                    {currentStep > st.num ? <Check className="w-4 h-4 stroke-[2.5]" /> : st.num}
                  </div>
                  <span
                    className={`block font-medium ${
                      currentStep === st.num ? 'text-royal font-bold' : 'text-text-light-muted'
                    }`}
                  >
                    {st.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Step Form Cards */}
          <div className="tezz-card p-6 sm:p-10 bg-white shadow-2xl">
            {/* ================= STEP 1: Basic Details ================= */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-navy-950">
                    Step 1: Basic Contact Information
                  </h3>
                  <p className="text-xs sm:text-sm text-text-light-muted">
                    We use your phone number to authenticate your identity and share rental updates.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-navy-950 mb-1.5">
                      Full Legal Name (as per Aadhaar) *
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Ramesh Kumar Verma"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-navy-950 ${
                        errors.fullName ? 'border-red-500' : 'border-slate-300 focus:border-royal'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-end">
                    <div className="sm:col-span-8">
                      <label className="block text-xs font-semibold text-navy-950 mb-1.5">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        maxLength={10}
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                        placeholder="98765 43210"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-navy-950 ${
                          errors.mobile ? 'border-red-500' : 'border-slate-300 focus:border-royal'
                        }`}
                      />
                      {errors.mobile && (
                        <p className="text-xs text-red-500 mt-1">{errors.mobile}</p>
                      )}
                    </div>
                    <div className="sm:col-span-4">
                      <button
                        type="button"
                        onClick={handleSendOtp}
                        className="btn-secondary-light w-full justify-center !min-h-[42px] text-xs font-bold"
                      >
                        <Send className="w-3.5 h-3.5 text-royal" />
                        <span>Send OTP</span>
                      </button>
                    </div>
                  </div>

                  {formData.otpSent && (
                    <div className="p-4 rounded-xl bg-sky-50 border border-sky-200 space-y-2 animate-fade-in">
                      <label className="block text-xs font-semibold text-navy-950">
                        Enter 6-Digit Verification OTP *
                      </label>
                      <input
                        type="text"
                        maxLength={6}
                        value={formData.otp}
                        onChange={(e) => setFormData({ ...formData, otp: e.target.value })}
                        placeholder="449210"
                        className={`w-full px-3.5 py-2 rounded-xl border text-sm text-navy-950 font-mono tracking-widest ${
                          errors.otp ? 'border-red-500' : 'border-slate-300 focus:border-royal'
                        }`}
                      />
                      {errors.otp && (
                        <p className="text-xs text-red-500 mt-1">{errors.otp}</p>
                      )}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-navy-950 mb-1.5">
                        Launch Hub City
                      </label>
                      <select
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-navy-950 bg-white"
                      >
                        <option value="Indore">Indore</option>
                        <option value="Bhopal">Bhopal</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-navy-950 mb-1.5">
                        Work / Usage Category
                      </label>
                      <select
                        value={formData.userCategory}
                        onChange={(e) => setFormData({ ...formData, userCategory: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-navy-950 bg-white"
                      >
                        <option value="Zomato/Swiggy Delivery Partner">Food Delivery (Zomato/Swiggy)</option>
                        <option value="Blinkit/Zepto Quick Commerce">Quick Commerce (Blinkit/Zepto)</option>
                        <option value="Rapido/Uber Commute Partner">Bike Taxi (Rapido/Uber)</option>
                        <option value="Daily Office Commuter">Personal Commute</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ================= STEP 2: Documents ================= */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-navy-950">
                    Step 2: Digital KYC Documents
                  </h3>
                  <p className="text-xs sm:text-sm text-text-light-muted">
                    Enter your government document details. No physical paperwork needed.
                  </p>
                </div>

                <div className="space-y-5">
                  {/* PAN Card */}
                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-3">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-bold text-navy-950 uppercase tracking-wider">
                        1. PAN Card Number *
                      </label>
                      <span className="text-[11px] text-text-light-muted">Regex: 5 Letters, 4 Digits, 1 Letter</span>
                    </div>
                    <input
                      type="text"
                      maxLength={10}
                      value={formData.panNumber}
                      onChange={(e) =>
                        setFormData({ ...formData, panNumber: e.target.value.toUpperCase() })
                      }
                      placeholder="ABCDE1234F"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm font-mono tracking-wider ${
                        errors.panNumber ? 'border-red-500' : 'border-slate-300 focus:border-royal'
                      }`}
                    />
                    {errors.panNumber && (
                      <p className="text-xs text-red-500">{errors.panNumber}</p>
                    )}
                    <div
                      onClick={() => {
                        setFormData({ ...formData, panFileUploaded: true });
                        toast.success('PAN card photo attached successfully');
                      }}
                      className="border border-dashed border-slate-300 rounded-xl p-3 text-center cursor-pointer hover:border-royal bg-white"
                    >
                      <Upload className="w-4 h-4 mx-auto text-royal mb-1" />
                      <span className="text-xs text-navy-950 font-medium inline-flex items-center gap-1.5">
                        {formData.panFileUploaded ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[2.5]" />
                            <span>PAN Photo Uploaded</span>
                          </>
                        ) : (
                          'Upload PAN Card Photo (Optional)'
                        )}
                      </span>
                    </div>
                  </div>

                  {/* Aadhaar Card */}
                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-3">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-bold text-navy-950 uppercase tracking-wider">
                        2. 12-Digit Aadhaar Number *
                      </label>
                      <span className="text-[11px] text-text-light-muted">12 digits UID</span>
                    </div>
                    <input
                      type="text"
                      maxLength={14}
                      value={formData.aadhaarNumber}
                      onChange={(e) => setFormData({ ...formData, aadhaarNumber: e.target.value })}
                      placeholder="1234 5678 9012"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm font-mono tracking-wider ${
                        errors.aadhaarNumber ? 'border-red-500' : 'border-slate-300 focus:border-royal'
                      }`}
                    />
                    {errors.aadhaarNumber && (
                      <p className="text-xs text-red-500">{errors.aadhaarNumber}</p>
                    )}
                    <div
                      onClick={() => {
                        setFormData({ ...formData, aadhaarFileUploaded: true });
                        toast.success('Aadhaar card front & back attached successfully');
                      }}
                      className="border border-dashed border-slate-300 rounded-xl p-3 text-center cursor-pointer hover:border-royal bg-white"
                    >
                      <Upload className="w-4 h-4 mx-auto text-royal mb-1" />
                      <span className="text-xs text-navy-950 font-medium inline-flex items-center gap-1.5">
                        {formData.aadhaarFileUploaded ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[2.5]" />
                            <span>Aadhaar Front & Back Uploaded</span>
                          </>
                        ) : (
                          'Upload Aadhaar Card Front & Back Photo'
                        )}
                      </span>
                    </div>
                  </div>

                  {/* Driving Licence */}
                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-3">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-bold text-navy-950 uppercase tracking-wider">
                        3. Driving Licence (DL) Number *
                      </label>
                      <span className="text-[11px] text-text-light-muted">2-Wheeler Licence</span>
                    </div>
                    <input
                      type="text"
                      value={formData.dlNumber}
                      onChange={(e) =>
                        setFormData({ ...formData, dlNumber: e.target.value.toUpperCase() })
                      }
                      placeholder="MP09 20210045678"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm font-mono tracking-wider ${
                        errors.dlNumber ? 'border-red-500' : 'border-slate-300 focus:border-royal'
                      }`}
                    />
                    {errors.dlNumber && (
                      <p className="text-xs text-red-500">{errors.dlNumber}</p>
                    )}
                    <div
                      onClick={() => {
                        setFormData({ ...formData, dlFileUploaded: true });
                        toast.success('Driving licence attached successfully');
                      }}
                      className="border border-dashed border-slate-300 rounded-xl p-3 text-center cursor-pointer hover:border-royal bg-white"
                    >
                      <Upload className="w-4 h-4 mx-auto text-royal mb-1" />
                      <span className="text-xs text-navy-950 font-medium inline-flex items-center gap-1.5">
                        {formData.dlFileUploaded ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[2.5]" />
                            <span>Driving Licence Uploaded</span>
                          </>
                        ) : (
                          'Upload Driving Licence Photo'
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ================= STEP 3: Bank Details ================= */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-navy-950">
                    Step 3: Bank Account for Security Deposit Refund
                  </h3>
                  <p className="text-xs sm:text-sm text-text-light-muted">
                    When you conclude your rental, your security deposit will be wired to this bank account within 48 hours.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-navy-950 mb-1.5">
                      Account Holder Name *
                    </label>
                    <input
                      type="text"
                      value={formData.accountHolder}
                      onChange={(e) => setFormData({ ...formData, accountHolder: e.target.value })}
                      placeholder="e.g. Ramesh Kumar Verma"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm ${
                        errors.accountHolder ? 'border-red-500' : 'border-slate-300 focus:border-royal'
                      }`}
                    />
                    {errors.accountHolder && (
                      <p className="text-xs text-red-500 mt-1">{errors.accountHolder}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-navy-950 mb-1.5">
                      Bank Account Number *
                    </label>
                    <input
                      type="text"
                      value={formData.accountNumber}
                      onChange={(e) => setFormData({ ...formData, accountNumber: e.target.value })}
                      placeholder="123456789012"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm font-mono ${
                        errors.accountNumber ? 'border-red-500' : 'border-slate-300 focus:border-royal'
                      }`}
                    />
                    {errors.accountNumber && (
                      <p className="text-xs text-red-500 mt-1">{errors.accountNumber}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-navy-950 mb-1.5">
                        Bank IFSC Code *
                      </label>
                      <input
                        type="text"
                        maxLength={11}
                        value={formData.ifscCode}
                        onChange={(e) =>
                          setFormData({ ...formData, ifscCode: e.target.value.toUpperCase() })
                        }
                        placeholder="SBIN0001234"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm font-mono tracking-wider ${
                          errors.ifscCode ? 'border-red-500' : 'border-slate-300 focus:border-royal'
                        }`}
                      />
                      {errors.ifscCode && (
                        <p className="text-xs text-red-500 mt-1">{errors.ifscCode}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-navy-950 mb-1.5">
                        Bank Name (Optional)
                      </label>
                      <input
                        type="text"
                        value={formData.bankName}
                        onChange={(e) => setFormData({ ...formData, bankName: e.target.value })}
                        placeholder="State Bank of India / HDFC"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-royal"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ================= STEP 4: Nominee + Terms ================= */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-navy-950">
                    Step 4: Emergency Nominee &amp; Terms
                  </h3>
                  <p className="text-xs sm:text-sm text-text-light-muted">
                    Required for on-road rider personal accident insurance coverage provided free with rental.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-navy-950 mb-1.5">
                        Nominee Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.nomineeName}
                        onChange={(e) => setFormData({ ...formData, nomineeName: e.target.value })}
                        placeholder="e.g. Geeta Verma"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm ${
                          errors.nomineeName ? 'border-red-500' : 'border-slate-300 focus:border-royal'
                        }`}
                      />
                      {errors.nomineeName && (
                        <p className="text-xs text-red-500 mt-1">{errors.nomineeName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-navy-950 mb-1.5">
                        Relationship with Rider
                      </label>
                      <select
                        value={formData.nomineeRelation}
                        onChange={(e) => setFormData({ ...formData, nomineeRelation: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-navy-950 bg-white"
                      >
                        <option value="Spouse">Spouse</option>
                        <option value="Parent">Father / Mother</option>
                        <option value="Sibling">Brother / Sister</option>
                        <option value="Other">Other Family Member</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-navy-950 mb-1.5">
                      Nominee Contact Phone Number
                    </label>
                    <input
                      type="tel"
                      maxLength={10}
                      value={formData.nomineePhone}
                      onChange={(e) => setFormData({ ...formData, nomineePhone: e.target.value })}
                      placeholder="98765 00000"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-royal"
                    />
                  </div>

                  {/* Terms & Conditions Checkbox */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.agreedToTerms}
                        onChange={(e) => setFormData({ ...formData, agreedToTerms: e.target.checked })}
                        className="mt-1 w-4 h-4 rounded text-royal focus:ring-royal"
                      />
                      <span className="text-xs text-navy-950 leading-relaxed">
                        I confirm that all submitted documents belong to me and are authentic. I agree to the{' '}
                        <Link to="/terms" target="_blank" className="text-royal font-bold underline">
                          Terms of Service
                        </Link>{' '}
                        and{' '}
                        <Link to="/refund-policy" target="_blank" className="text-royal font-bold underline">
                          Rental Policy
                        </Link>
                        .
                      </span>
                    </label>
                    {errors.agreedToTerms && (
                      <p className="text-xs text-red-500 pl-7">{errors.agreedToTerms}</p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* ================= STEP 5: Review & Submit ================= */}
            {currentStep === 5 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-navy-950">
                    Step 5: Review Application Summary
                  </h3>
                  <p className="text-xs sm:text-sm text-text-light-muted">
                    Double-check your information before final digital submission.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs sm:text-sm">
                    <div className="font-bold text-navy-950 border-b border-slate-200 pb-1.5 flex items-center justify-between">
                      <span>Rider Details</span>
                      <button onClick={() => setCurrentStep(1)} className="text-royal font-semibold text-xs">Edit</button>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-text-light-muted">
                      <div>Name: <span className="text-navy-950 font-semibold">{formData.fullName}</span></div>
                      <div>Mobile: <span className="text-navy-950 font-semibold">{formData.mobile}</span></div>
                      <div>City Hub: <span className="text-navy-950 font-semibold">{formData.city}</span></div>
                      <div>Platform: <span className="text-navy-950 font-semibold">{formData.userCategory}</span></div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs sm:text-sm">
                    <div className="font-bold text-navy-950 border-b border-slate-200 pb-1.5 flex items-center justify-between">
                      <span>KYC Documents</span>
                      <button onClick={() => setCurrentStep(2)} className="text-royal font-semibold text-xs">Edit</button>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-text-light-muted">
                      <div>PAN: <span className="text-navy-950 font-semibold font-mono">{formData.panNumber}</span></div>
                      <div>Aadhaar: <span className="text-navy-950 font-semibold font-mono">{formData.aadhaarNumber}</span></div>
                      <div className="col-span-2">DL Number: <span className="text-navy-950 font-semibold font-mono">{formData.dlNumber}</span></div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs sm:text-sm">
                    <div className="font-bold text-navy-950 border-b border-slate-200 pb-1.5 flex items-center justify-between">
                      <span>Refund Bank Account</span>
                      <button onClick={() => setCurrentStep(3)} className="text-royal font-semibold text-xs">Edit</button>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-text-light-muted">
                      <div>Account Holder: <span className="text-navy-950 font-semibold">{formData.accountHolder}</span></div>
                      <div>Account: <span className="text-navy-950 font-semibold font-mono">{formData.accountNumber}</span></div>
                      <div>IFSC: <span className="text-navy-950 font-semibold font-mono">{formData.ifscCode}</span></div>
                      <div>Nominee: <span className="text-navy-950 font-semibold">{formData.nomineeName} ({formData.nomineeRelation})</span></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ================= SUCCESS STATE (Step 6) ================= */}
            {currentStep === 6 && (
              <div className="text-center space-y-6 py-6 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div>
                  <span className="text-xs uppercase font-bold tracking-wider text-royal">
                    Application Pre-Approved
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold font-heading text-navy-950 mt-1">
                    Welcome to the TezzEV Family!
                  </h3>
                  <p className="text-sm text-text-light-muted max-w-md mx-auto mt-2 leading-relaxed">
                    Your digital verification has been logged for <span className="font-semibold text-navy-950">{formData.city} Hub</span>. Our team will verify your documents and send you a vehicle handover confirmation.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-sky-50 border border-sky-200 max-w-xs mx-auto">
                  <div className="text-xs text-text-light-muted font-bold uppercase">
                    Application Reference No.
                  </div>
                  <div className="text-2xl font-black font-heading text-royal mt-1">
                    APP-{Math.floor(100000 + Math.random() * 900000)}
                  </div>
                  <div className="text-[11px] text-emerald-700 font-semibold mt-1">
                    Status: Digital KYC Verification Approved
                  </div>
                </div>

                <div className="flex items-center justify-center gap-4 flex-wrap pt-2">
                  <Link to="/rider-dashboard" className="btn-primary">
                    <span>Open Rider Dashboard Preview</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link to="/" className="btn-secondary-light">
                    <span>Back to Home</span>
                  </Link>
                </div>
              </div>
            )}

            {/* Wizard Navigation Buttons */}
            {currentStep <= 5 && (
              <div className="flex items-center justify-between pt-8 border-t border-slate-100 mt-8">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="btn-secondary-light !min-h-[44px]"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>
                ) : (
                  <div />
                )}

                {currentStep < 5 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="btn-primary !min-h-[44px]"
                  >
                    <span>Continue to Step {currentStep + 1}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      setCurrentStep(6);
                      toast.success('Registration application submitted successfully! Welcome to TezzEV Fleet.');
                    }}
                    className="btn-primary !min-h-[48px] !bg-leaf !text-navy-950 hover:!bg-leaf/90 font-bold"
                  >
                    <ShieldCheck className="w-5 h-5" />
                    <span>Submit Digital Application</span>
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* WAVE DIVIDER: Sky-200 to Deep Navy */}
      <SectionDivider type="sky200-to-navy" />

      {/* Trust Banner (Deep Navy) */}
      <section className="bg-gradient-deep text-white section-pad text-center">
        <div className="container-custom max-w-2xl mx-auto space-y-4">
          <div className="flex items-center justify-center gap-2 text-leaf text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>Bank-Grade Data Privacy</span>
          </div>
          <h2 className="text-white">
            Your documents are <span className="text-blue-light">100% secure</span>.
          </h2>
          <p className="text-text-dark-muted text-sm sm:text-base">
            All submitted government IDs are encrypted and used solely for vehicle handover and insurance eligibility.
          </p>
        </div>
      </section>
    </div>
  );
};
