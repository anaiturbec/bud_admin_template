import React from 'react';

export default function ContentIcon({
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
        strokeWidth="1.5"
        d="M2.813 16.977h4.825a2.812 2.812 0 012.514 1.555l.32.64a2.813 2.813 0 002.517 1.555h4.022a2.813 2.813 0 002.517-1.555l.32-.64a2.811 2.811 0 012.516-1.555h4.823m-24.375.422v5.203a2.812 2.812 0 002.813 2.812h18.75a2.813 2.813 0 002.813-2.812v-5.203c0-.28-.043-.559-.125-.826L24.05 6.774a2.812 2.812 0 00-2.688-1.985H8.64A2.812 2.812 0 005.95 6.774l-3.013 9.799a2.813 2.813 0 00-.126.826z"
      />
    </svg>
  );
}
