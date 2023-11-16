import React from 'react';

function FacebookIcon({ className, ...props }: React.SVGProps<SVGSVGElement>) {
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
        d="M8 18.748v-8H5.333V8.081H8V6.65c0-2.711 1.32-3.901 3.574-3.901 1.08 0 1.65.08 1.92.117v2.55h-1.537c-.956 0-1.29.504-1.29 1.527v1.14h2.803l-.38 2.666h-2.423v8H8z"
      />
    </svg>
  );
}

export default FacebookIcon;
