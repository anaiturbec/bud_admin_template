import { useRouter } from 'next/router';
import React from 'react';

interface SidebarButtonProps {
  icon: React.ReactElement;
  text: string;
  current: string;
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  href: string;
}

export default function SidebarButton({
  icon,
  text,
  current,
  selected,
  setSelected,
  href,
}: SidebarButtonProps) {
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={() => {
        setSelected(current);
        router.push(href);
      }}
      className={`${
        current === selected ? 'bg-white' : ''
      } w-full rounded-lg flex flex-row p-2 items-center gap-x-2`}
    >
      {icon}
      <p
        className={`${
          selected === current ? 'text-primary-400' : 'text-white'
        }  font-light`}
      >
        {text}
      </p>
    </button>
  );
}
