interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent';
  className?: string;
}

export function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const variants = {
    default: 'bg-black/5 text-ink-600',
    accent: 'bg-accent-500/10 text-accent-600 border border-accent-500/20',
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
