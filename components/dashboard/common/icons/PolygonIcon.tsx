import React from 'react';

function PolygonIcon({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 10 9"
      {...props}
    >
      <path
        fill="#006379"
        fillOpacity="0.2"
        d="M4.567 8.25a.5.5 0 00.866 0l4.33-7.5A.5.5 0 009.33 0H.67a.5.5 0 00-.433.75l4.33 7.5z"
      />
    </svg>
  );
}

export default PolygonIcon;
