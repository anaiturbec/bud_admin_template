import React from 'react';

export default function MultipleUsers({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 30 31"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="0.8"
        strokeWidth="1.5"
        d="M18.75 24.012c1.066.31 2.171.466 3.281.465a11.673 11.673 0 005.152-1.19 5.156 5.156 0 00-9.417-3.117m.984 3.842v-.004c0-1.391-.358-2.7-.984-3.838m.984 3.842v.132a15.398 15.398 0 01-7.97 2.208c-2.914 0-5.64-.807-7.967-2.208l-.002-.136a7.969 7.969 0 0114.955-3.838M15 8.07a4.219 4.219 0 11-8.437 0 4.219 4.219 0 018.437 0zm10.313 2.813a3.281 3.281 0 11-6.563 0 3.281 3.281 0 016.563 0z"
      />
    </svg>
  );
}
