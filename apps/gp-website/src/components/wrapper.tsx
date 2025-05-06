'use client';

import React from 'react';
import { ToastContainer } from 'react-toastify';
import { UIToastContainer } from '@geonet-v3/ui-components';

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
      <ToastContainer />
      <UIToastContainer />
    </div>
  );
}
