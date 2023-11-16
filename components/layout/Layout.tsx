import React from 'react';
import { Sidebar } from '../dashboard/sidebar';

interface LayoutProps {
  children: React.ReactElement | React.ReactElement[];
  current?: string;
}

export default function Layout({ children, current }: LayoutProps) {
  return (
    <div className="h-screen w-screen flex flex-row overflow-hidden m-0 bg-bg-100">
      <Sidebar current={current} />
      <div className="w-4/5 overflow-y-scroll overflow-x-hidden m-0">
        {children}
      </div>
    </div>
  );
}
