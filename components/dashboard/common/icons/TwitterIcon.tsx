import React from 'react';

function TwitterIcon({ className, ...props }: React.SVGProps<SVGSVGElement>) {
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
        d="M18.666 5.373a7.099 7.099 0 01-2.042.56 3.562 3.562 0 001.563-1.968 7.13 7.13 0 01-2.259.864 3.556 3.556 0 00-6.06 3.243A10.096 10.096 0 012.54 4.354a3.547 3.547 0 00-.48 1.789c0 1.233.627 2.322 1.58 2.96a3.549 3.549 0 01-1.61-.445v.044a3.557 3.557 0 002.853 3.487 3.559 3.559 0 01-1.606.061 3.56 3.56 0 003.322 2.47 7.133 7.133 0 01-5.265 1.473 10.067 10.067 0 005.45 1.597c6.542 0 10.118-5.418 10.118-10.118 0-.154-.003-.307-.01-.46a7.236 7.236 0 001.776-1.84z"
      />
    </svg>
  );
}

export default TwitterIcon;
