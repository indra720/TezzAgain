import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  highlightWord?: string;
  subtitle?: string;
  breadcrumbs: BreadcrumbItem[];
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  highlightWord,
  subtitle,
  breadcrumbs,
}) => {
  const renderTitle = () => {
    if (!highlightWord) return title;
    const parts = title.split(new RegExp(`(${highlightWord})`, 'gi'));
    return parts.map((part, index) =>
      part.toLowerCase() === highlightWord.toLowerCase() ? (
        <span key={index} className="text-blue-light">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="w-full bg-gradient-deep border-b border-navy-800 pt-7 pb-8 sm:pt-9 sm:pb-10 text-white">
      <div className="container-custom">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-1.5 text-xs text-text-dark-muted mb-2.5 flex-wrap">
          <Link
            to="/"
            className="flex items-center gap-1 text-text-dark-muted hover:text-white transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              <ChevronRight className="w-3.5 h-3.5 text-blue-light/70" />
              {crumb.href ? (
                <Link
                  to={crumb.href}
                  className="hover:text-white transition-colors capitalize"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-blue-light font-medium capitalize">
                  {crumb.label}
                </span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* H1 Title */}
        <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-heading font-bold mb-2 tracking-tight">
          {renderTitle()}
        </h1>

        {/* One Line Subtitle */}
        {subtitle && (
          <p className="text-text-dark-muted text-xs sm:text-sm max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};
