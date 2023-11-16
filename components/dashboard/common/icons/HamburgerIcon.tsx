import React from 'react';

function HamburgerIcon({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 25 24"
      {...props}
    >
      <g fill="currentColor" clipPath="url(#clip0_1009_8005)">
        <path d="M3.5 15.5h18v-2h-18v2zm0-4.5h18V9h-18v2zm0-6.5v2h18v-2h-18zM21.5 20h-18v-2h18v2z" />
      </g>
      <defs>
        <clipPath id="clip0_1009_8005">
          <path fill="#fff" d="M0 0H24V24H0z" transform="translate(.5)" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default HamburgerIcon;
