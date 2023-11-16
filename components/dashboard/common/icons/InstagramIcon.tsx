import React from 'react';

function InstagramIcon({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 20 21"
      {...props}
    >
      <path
        fill="currentColor"
        d="M6.665 2.748A4.672 4.672 0 002 7.416v6.667a4.672 4.672 0 004.668 4.665h6.667A4.672 4.672 0 0018 14.08V7.413a4.672 4.672 0 00-4.668-4.665H6.665zm8.002 2.667a.667.667 0 110 1.333.667.667 0 010-1.333zM10 6.748c2.206 0 4 1.794 4 4s-1.794 4-4 4-4-1.794-4-4 1.794-4 4-4zm0 1.333a2.667 2.667 0 100 5.334 2.667 2.667 0 000-5.334z"
      />
    </svg>
  );
}

export default InstagramIcon;
