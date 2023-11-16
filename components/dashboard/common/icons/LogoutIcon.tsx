import React from 'react';

export default function LogoutIcon({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 30 30"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="0.8"
        strokeWidth="1.5"
        d="M19.688 11.25V6.562a2.812 2.812 0 00-2.813-2.812h-7.5a2.813 2.813 0 00-2.813 2.813v16.875a2.812 2.812 0 002.813 2.812h7.5a2.812 2.812 0 002.813-2.813V18.75M15 11.25L11.25 15m0 0L15 18.75M11.25 15h15.938"
      />
    </svg>
  );
}
