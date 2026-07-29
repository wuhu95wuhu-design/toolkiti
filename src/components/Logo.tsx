export default function Logo({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer hexagon */}
      <rect x="2" y="2" width="28" height="28" rx="6" stroke="currentColor" strokeWidth="2" fill="none" />
      {/* Inner T */}
      <path d="M10 10H22M16 10V22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      {/* Accent dot */}
      <circle cx="22" cy="22" r="3" fill="currentColor" className="text-[var(--accent)]" />
    </svg>
  );
}
