import React from 'react';

function MultipleUsersIcon({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) {
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
        d="M75 78a37.892 37.892 0 0015.588-1.996 12.5 12.5 0 00-19.509-11.333m3.917 13.325l.004.129c0 .938-.05 1.862-.154 2.775A49.767 49.767 0 0150 87.5c-9.042 0-17.53-2.4-24.846-6.6A25.272 25.272 0 0125 77.996m50 0a24.879 24.879 0 00-3.92-13.321m0 0A24.98 24.98 0 0050 53.125a24.98 24.98 0 00-21.075 11.55m0 0A12.5 12.5 0 009.421 76.008a37.44 37.44 0 0015.583 1.988m3.917-13.321a24.879 24.879 0 00-3.917 13.32M62.5 28.126a12.5 12.5 0 11-25 0 12.5 12.5 0 0125 0v0zm25 12.5a9.376 9.376 0 01-18.036 3.588 9.376 9.376 0 0115.29-10.217 9.375 9.375 0 012.746 6.629v0zm-56.25 0a9.376 9.376 0 01-18.036 3.588 9.376 9.376 0 0115.29-10.217 9.375 9.375 0 012.746 6.629v0z"
      />
    </svg>
  );
}

export default MultipleUsersIcon;
