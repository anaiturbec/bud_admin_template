import React from 'react';
import Button from '../Button';
import { AddIcon } from '../icons';

interface AddButtonProps {
  title: string;
  action: () => void;
}

export default function AddButton({ title, action }: AddButtonProps) {
  return (
    <div>
      <Button
        className="ml-auto h-10 font-normal flex"
        onClick={(e) => {
          e.preventDefault();
          action();
        }}
      >
        <AddIcon className="h-4 w-4 my-auto mr-2 " />
        <span className="text-sm my-auto">{title}</span>
      </Button>
    </div>
  );
}
