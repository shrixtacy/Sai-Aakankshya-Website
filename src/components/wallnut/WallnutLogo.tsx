'use client';

interface WallnutLogoProps {
  color?: string;
  className?: string;
}

export default function WallnutLogo({ color = 'white', className = '' }: WallnutLogoProps) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`} style={{ lineHeight: 1 }}>
      <img
        src="/assets/images/saia.png"
        alt="SAI AAKANKSHYA ASSOCIATES"
        style={{
          width: '2.5rem',
          height: '2.5rem',
          objectFit: 'contain',
          flexShrink: 0,
        }}
      />
      {/* Hide text on mobile, show on lg+ */}
      <span
        className="hidden lg:inline"
        style={{
          color,
          fontWeight: 700,
          fontSize: '1.15rem',
          letterSpacing: '-0.01em',
          lineHeight: 1,
          whiteSpace: 'nowrap',
        }}
      >
        SAI AAKANKSHYA
        <span style={{ color: '#FDC41F', marginLeft: '0.25em' }}>ASSOCIATES</span>
      </span>
    </span>
  );
}
