import React from 'react';

export interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  children?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  function _Input(
    { label = '', children, rightIcon, className = '', onChange, ...props },
    ref
  ) {
    return (
      <label className="block w-full">
        {label !== '' ? (
          <span className="text-black text-sm font-medium mb-2 w-full">
            {label}
          </span>
        ) : null}
        <div
          className={`w-full border-[0.5px] border-solid border-neutral-400 rounded flex items-center xl:py-2 py-1 px-3 gap-4 ${className}`}
        >
          {children}
          <input
            className={`${
              label !== '' ? ' ' : ''
            } focus:ring-0  border-none appearance-none h-6 bg-transparent outline-none focus:outline-none focus:shadow-none w-full placeholder:text-neutral-100  tracking-wider  placeholder:text-sm text-black  p-0 ${className}`}
            ref={ref}
            onChange={onChange}
            {...props}
          />
          {rightIcon}
        </div>
      </label>
    );
  }
);

export default Input;
