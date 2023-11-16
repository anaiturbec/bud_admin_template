import React from 'react';

export default function ProfileIcon({
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
        d="M22.477 23.507A9.36 9.36 0 0015 19.79a9.36 9.36 0 00-7.478 3.718m14.954 0a11.25 11.25 0 10-14.954 0m14.954 0A11.207 11.207 0 0115 26.351a11.207 11.207 0 01-7.478-2.844M18.75 12.29a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0v0z"
      />
    </svg>
  );
}
