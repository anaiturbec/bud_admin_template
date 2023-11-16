/* eslint-disable @next/next/no-img-element */
import React from 'react';
import LoginForm from '../components/auth/LoginForm';

export default function SignIn() {
  return (
    <div className="flex flex-row w-full h-screen bg-white">
      <div className="xl:w-1/2 sm:w-2/3 w-full h-full flex sm:static absolute justify-center items-center">
        <LoginForm />
      </div>
      <div className="w-1/2 h-full flex justify-center items-center bg-primary-400">
        <div className="flex flex-col">
          <p className="text-2xl font-light mb-5">Admin</p>
          <img src="/logo/logo-white.png" alt="" className="w-60" />
        </div>
      </div>
    </div>
  );
}
