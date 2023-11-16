import React from 'react';

export default function ApplicationIcon({
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="0.8"
        strokeWidth="1.5"
        d="M7.25 9h2.813M7.25 11.25h2.813M7.25 13.5h2.813m2.25.563H14a1.687 1.687 0 001.688-1.688V4.581c0-.851-.634-1.574-1.482-1.644a36.35 36.35 0 00-.843-.06m0 0c.05.161.075.33.075.498a.563.563 0 01-.563.563H9.5a.563.563 0 01-.563-.563c0-.173.027-.34.075-.498m4.351 0a1.689 1.689 0 00-1.613-1.19h-1.125a1.688 1.688 0 00-1.613 1.19m0 0c-.282.017-.562.038-.843.06-.848.07-1.482.793-1.482 1.644v1.606m0 0h-2.53a.844.844 0 00-.845.844v8.438c0 .466.379.844.844.844h7.313a.844.844 0 00.844-.844V7.03a.844.844 0 00-.844-.843H6.688zM5.563 9h.006v.006h-.005V9zm0 2.25h.006v.006h-.005v-.006zm0 2.25h.006v.006h-.005V13.5z"
      />
    </svg>
  );
}
