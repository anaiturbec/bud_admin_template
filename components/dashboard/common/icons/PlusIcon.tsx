import React from 'react';

export default function PlusIcon({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 19 18"
      {...props}
    >
      <path
        fill="currentColor"
        fillOpacity="0.8"
        d="M9.5 3.375v11.25zM15.125 9H3.875z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="0.8"
        strokeWidth="1.5"
        d="M9.5 3.375v11.25M15.125 9H3.875"
      />
    </svg>
  );
}
