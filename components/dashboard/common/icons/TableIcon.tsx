import React from 'react';

function TableIcon({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 100 100"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4.5"
        d="M31.25 59.375v9.375M43.75 50v18.75m12.5-28.125V68.75m12.5-37.5v37.5M25 84.375h50A9.375 9.375 0 0084.375 75V25A9.375 9.375 0 0075 15.625H25A9.375 9.375 0 0015.625 25v50A9.375 9.375 0 0025 84.375z"
      />
    </svg>
  );
}

export default TableIcon;
