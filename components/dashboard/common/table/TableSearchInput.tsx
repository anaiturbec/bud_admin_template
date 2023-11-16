import React from 'react';
import { useGlobalFilter } from './Table';
import { SearchIcon } from '../icons';

function DebouncedInput({
  value: initialValue,
  onChange,
  debounce = 500,
  ...props
}: {
  value: string | number;
  onChange: (_value: string | number) => void;
  debounce?: number;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>) {
  const [value, setValue] = React.useState(initialValue);

  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <input
      {...props}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

export default function TableSearchInput({
  className = '',
  ...props
}: Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'>) {
  const [globalFilter, setGlobalFilter] = useGlobalFilter();
  return (
    <DebouncedInput
      value={globalFilter ?? ''}
      onChange={(value) => setGlobalFilter(String(value))}
      className={`mt-0 block md:w-2/5 w-1/2 px-0.5 rounded-[4px] focus:ring-0 focus:border-black placeholder:text-sm px-[14px] py-[10pxs] border-[0.5px] border-neutral-300 ${className}`}
      placeholder="Buscar"
      type="search"
      {...props}
    />
  );
}
