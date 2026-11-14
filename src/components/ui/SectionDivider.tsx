import React from 'react';

type DividerType =
  | 'navy-to-sky200'
  | 'sky200-to-navy'
  | 'navy-to-sky100'
  | 'sky100-to-navy';

interface SectionDividerProps {
  type: DividerType;
  className?: string;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({ type, className = '' }) => {
  const colors = {
    navyDeep: '#06122E',
    sky200: '#D6E6FF',
    sky100: '#EAF2FF',
  };

  switch (type) {
    case 'navy-to-sky200':
      return (
        <div className={`w-full overflow-hidden leading-none -mt-0.5 -mb-0.5 ${className}`}>
          <svg
            className="w-full h-4 sm:h-6 md:h-7 block"
            viewBox="0 0 1440 40"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 C360,35 1080,35 1440,0 L1440,40 L0,40 Z"
              fill={colors.sky200}
            />
          </svg>
        </div>
      );

    case 'sky200-to-navy':
      return (
        <div className={`w-full overflow-hidden leading-none -mt-0.5 -mb-0.5 ${className}`}>
          <svg
            className="w-full h-4 sm:h-6 md:h-7 block"
            viewBox="0 0 1440 40"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 C420,38 1020,38 1440,0 L1440,40 L0,40 Z"
              fill={colors.navyDeep}
            />
          </svg>
        </div>
      );

    case 'navy-to-sky100':
      return (
        <div className={`w-full overflow-hidden leading-none -mt-0.5 -mb-0.5 ${className}`}>
          <svg
            className="w-full h-4 sm:h-6 md:h-7 block"
            viewBox="0 0 1440 40"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 C480,35 960,35 1440,0 L1440,40 L0,40 Z"
              fill={colors.sky100}
            />
          </svg>
        </div>
      );

    case 'sky100-to-navy':
      return (
        <div className={`w-full overflow-hidden leading-none -mt-0.5 -mb-0.5 ${className}`}>
          <svg
            className="w-full h-4 sm:h-6 md:h-7 block"
            viewBox="0 0 1440 40"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 C380,38 1060,38 1440,0 L1440,40 L0,40 Z"
              fill={colors.navyDeep}
            />
          </svg>
        </div>
      );

    default:
      return null;
  }
};
