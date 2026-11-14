import React from 'react';
import { Link } from 'react-router-dom';

interface TezzLogoProps {
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  withTagline?: boolean;
  className?: string;
}

export const TezzLogo: React.FC<TezzLogoProps> = ({
  variant = 'dark',
  size = 'md',
  withTagline = true,
  className = '',
}) => {
  const isDark = variant === 'dark';

  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl sm:text-4xl',
  };

  return (
    <Link to="/" className={`inline-flex flex-col group select-none ${className}`}>
      <div className="flex items-center gap-1">
        {/* Visual Brand Mark */}
        <div className="relative flex items-center font-heading font-black tracking-tighter italic">
          <span className={`${sizeClasses[size]} ${isDark ? 'text-white' : 'text-navy-950'}`}>
            TEZZ
          </span>
          <span className={`${sizeClasses[size]} text-blue ml-0.5 font-extrabold`}>
            EV
          </span>
          {/* Green Leaf Graphic perched over the Z's */}
          <svg
            className="absolute -top-1.5 left-[3.2rem] w-4 h-4 sm:w-5 sm:h-5 text-leaf transform rotate-12 transition-transform group-hover:scale-110"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 008 20C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
          </svg>
        </div>
      </div>
      {withTagline && (
        <div className="flex items-center gap-1.5 mt-[-2px]">
          <span className="h-[2px] w-3 bg-blue rounded-full"></span>
          <span
            className={`text-[9px] sm:text-[10px] font-semibold tracking-widest uppercase ${
              isDark ? 'text-blue-light' : 'text-royal'
            }`}
          >
            Go Green Go Far
          </span>
          <span className="h-[2px] w-3 bg-blue rounded-full"></span>
        </div>
      )}
    </Link>
  );
};
