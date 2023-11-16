/* eslint-disable react/button-has-type */
import React from 'react';

export default function Button({
  className,
  onClick,
  children,
  ...props
}: React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) {
  return (
    <button
      className={` py-3 px-4 rounded   hover:opacity-90 text-white font-title font-semibold tracking-wide  ${className}`}
      {...props}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
