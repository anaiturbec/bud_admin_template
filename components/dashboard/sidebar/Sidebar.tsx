/* eslint-disable @next/next/no-img-element */
import React from 'react';
import {
  CategoriesIcon,
  CompanyIcon,
  ContentIcon,
  LogoutIcon,
  MultipleUsers,
  ProfileIcon,
} from '../common';
import { signOut } from 'next-auth/react';
import SidebarButton from './SidebarButton';
import { useUser } from '../../../hooks';

interface SidebarProps {
  current?: string;
}

export default function Sidebar({ current }: SidebarProps) {
  // states
  const [selected, setSelected] = React.useState(current ?? '');
  // hooks
  const [user] = useUser();
  // lists
  const SidebarList = [
    {
      current: 'content',
      icon: (
        <ContentIcon
          className={`${
            selected === 'content' ? 'text-primary-400' : 'text-white'
          } w-8`}
        />
      ),
      text: 'Dashboard',
      href: '/dashboard',
    },
    {
      current: 'users',
      icon: (
        <MultipleUsers
          className={`${
            selected === 'users' ? 'text-primary-400' : 'text-white'
          } w-8`}
        />
      ),
      text: 'Usuarios',
      href: '/dashboard/users',
    },
    {
      current: 'profile',
      icon: (
        <ProfileIcon
          className={`${
            selected === 'profile' ? 'text-primary-400' : 'text-white'
          } w-8`}
        />
      ),
      text: 'Perfil',
      href: '/dashboard/profile',
    },
  ];

  const AdminSidebarList = [
    {
      current: 'content',
      icon: (
        <ContentIcon
          className={`${
            selected === 'content' ? 'text-primary-400' : 'text-white'
          } w-8`}
        />
      ),
      text: 'Contenido',
      href: '/dashboard',
    },
    {
      current: 'profile',
      icon: (
        <ProfileIcon
          className={`${
            selected === 'profile' ? 'text-primary-400' : 'text-white'
          } w-8`}
        />
      ),
      text: 'Perfil',
      href: '/dashboard/profile',
    },
  ];

  return (
    <div className="w-1/5 h-full bg-primary-400 px-5 py-16">
      <img alt="" src="/logo/logo-white.png" className="w-40" />
      <div className="flex flex-col mt-10 gap-y-2">
        {user?.userType === 'superadmin'
          ? SidebarList.map((side, i) => (
              <SidebarButton
                selected={selected}
                setSelected={setSelected}
                current={side.current}
                icon={side.icon}
                text={side.text}
                href={side.href}
                key={i}
              />
            ))
          : AdminSidebarList.map((side, i) => (
              <SidebarButton
                selected={selected}
                setSelected={setSelected}
                current={side.current}
                icon={side.icon}
                text={side.text}
                href={side.href}
                key={i}
              />
            ))}
      </div>
      <div className="w-full absolute bottom-10 flex items-end">
        <button
          type="button"
          onClick={() => signOut({ redirect: true })}
          className="flex flex-row gap-x-2 text-white p-2 hover:text-orange-500 w-full"
        >
          <LogoutIcon className="w-8" />
          <p className="text-lg font-light">Cerrar Sesión</p>
        </button>
      </div>
    </div>
  );
}
