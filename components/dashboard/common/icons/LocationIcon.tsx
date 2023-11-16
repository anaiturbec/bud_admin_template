import React from 'react';

function LocationIcon({ className, ...props }: React.SVGProps<SVGSVGElement>) {
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
        d="M62.5 43.75a12.5 12.5 0 11-25 0 12.5 12.5 0 0125 0v0z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4.5"
        d="M81.25 43.75C81.25 73.508 50 90.625 50 90.625S18.75 73.508 18.75 43.75a31.25 31.25 0 0162.5 0v0z"
      />
    </svg>
  );
}

export default LocationIcon;
