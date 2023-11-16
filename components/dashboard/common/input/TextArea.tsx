import React from 'react';

export interface TextAreaProps
  extends React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  label?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  function _TextArea({ label = '', className = '', onChange, ...props }, ref) {
    return (
      <label className="block w-full">
        {label !== '' ? (
          <span className="text-black text-sm font-medium mb-2 w-full">
            {label}
          </span>
        ) : null}
        <textarea
          className={`${
            label !== '' ? ' ' : ''
          } border-[0.5px] border-solid w-full border-neutral-400 appearance-none outline-none block w-full rounded py-2 px-3 placeholder:text-neutral-100  ${className}`}
          ref={ref}
          onChange={onChange}
          {...props}
        />
      </label>
    );
  }
);
