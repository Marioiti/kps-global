import React from 'react';

interface DaisyMotifProps {
  className?: string;
  size?: number;
  animate?: boolean;
}

const DaisyMotif: React.FC<DaisyMotifProps> = ({ className = '', size = 120, animate = false }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${animate ? 'animate-petal-rotate' : ''} ${className}`}
    >
      {/* Four petals - Resources, Logistics, Contracts, Payments */}
      <path
        d="M60 10C60 10 72 30 72 45C72 52 67 58 60 58C53 58 48 52 48 45C48 30 60 10 60 10Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M110 60C110 60 90 72 75 72C68 72 62 67 62 60C62 53 68 48 75 48C90 48 110 60 110 60Z"
        fill="currentColor"
        opacity="0.7"
      />
      <path
        d="M60 110C60 110 48 90 48 75C48 68 53 62 60 62C67 62 72 68 72 75C72 90 60 110 60 110Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M10 60C10 60 30 48 45 48C52 48 58 53 58 60C58 67 52 72 45 72C30 72 10 60 10 60Z"
        fill="currentColor"
        opacity="0.7"
      />
      {/* Center circle */}
      <circle cx="60" cy="60" r="8" fill="currentColor" opacity="1" />
    </svg>
  );
};

export default DaisyMotif;
