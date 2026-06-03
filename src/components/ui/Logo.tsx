import { useId } from 'react';
import { Link } from 'react-router-dom';

type LogoSize = 'sm' | 'md' | 'lg';

const iconSizes: Record<LogoSize, string> = {
  sm: 'h-8 w-8',
  md: 'h-9 w-9',
  lg: 'h-20 w-20 sm:h-24 sm:w-24',
};

const textSizes: Record<LogoSize, string> = {
  sm: 'text-base',
  md: 'text-lg sm:text-xl',
  lg: 'text-3xl sm:text-4xl md:text-5xl',
};

function LogoMark({ className, gradientId }: { className: string; gradientId: string }) {
  return (
    <svg
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient
          id={gradientId}
          x1="10"
          y1="8"
          x2="46"
          y2="48"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8fd0ff" />
          <stop offset="0.45" stopColor="#3385ff" />
          <stop offset="1" stopColor="#0066FF" />
        </linearGradient>
        <filter id={`${gradientId}-glow`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path
        fill={`url(#${gradientId})`}
        filter={`url(#${gradientId}-glow)`}
        d="M38 10H22L14 22h9l-6 10h16l8-12h-9l6-10z"
      />
      <path
        fill={`url(#${gradientId})`}
        fillOpacity="0.35"
        d="M30 18h-4v2h4v-2zm0 6h-4v2h4v-2z"
      />
    </svg>
  );
}

function LogoWordmark({ size }: { size: LogoSize }) {
  return (
    <span
      className={`font-semibold tracking-tight leading-none whitespace-nowrap ${textSizes[size]}`}
    >
      <span className="text-white">Sensara</span>
      <span className="text-accent-400">AI</span>
    </span>
  );
}

interface LogoProps {
  size?: LogoSize;
  variant?: 'default' | 'navbar' | 'hero';
  className?: string;
  linkToHome?: boolean;
  /** @deprecated PNG blend no longer used; kept for API compatibility */
  blend?: boolean;
}

export function Logo({
  size = 'md',
  variant = 'default',
  className = '',
  linkToHome = true,
}: LogoProps) {
  const gradientId = useId().replace(/:/g, '');

  const resolvedSize: LogoSize =
    variant === 'navbar' ? 'md' : variant === 'hero' ? 'lg' : size;
  const isStacked = variant === 'hero' || (variant === 'default' && resolvedSize === 'lg');

  const content = (
    <div
      className={`relative z-10 inline-flex bg-transparent ${
        isStacked
          ? 'flex-col items-center gap-3 sm:gap-4'
          : 'flex-row items-center gap-2.5'
      } ${className}`}
    >
      <LogoMark className={iconSizes[resolvedSize]} gradientId={gradientId} />
      <LogoWordmark size={resolvedSize} />
    </div>
  );

  const wrapperClass = isStacked
    ? 'relative inline-flex justify-center'
    : 'inline-flex shrink-0 items-center';

  const inner = (
    <>
      {isStacked && (
        <div
          className="pointer-events-none absolute left-1/2 top-6 h-28 w-28 -translate-x-1/2 rounded-full bg-accent-500/20 blur-3xl sm:h-36 sm:w-36"
          aria-hidden
        />
      )}
      {content}
    </>
  );

  if (linkToHome) {
    return (
      <Link to="/" className={wrapperClass} aria-label="SensaraAI">
        {inner}
      </Link>
    );
  }

  return <span className={wrapperClass}>{inner}</span>;
}
