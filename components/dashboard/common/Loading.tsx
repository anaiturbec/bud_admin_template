/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { TailSpin } from 'react-loader-spinner';

export default function Loading() {
  return (
    <div className="w-full h-40 flex justify-center px-8 items-center">
      <TailSpin height={40} width={40} color="#3375B4" ariaLabel="loading" />
    </div>
  );
}
