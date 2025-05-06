'use client';

import { toast } from 'react-toastify';
import { ITest } from '@geonet-v3/squaremetre-types';

export function UiComponents(props: ITest) {
  const envValue = String(process.env.NEXT_PUBLIC_TEST_ENV ?? 'fail read .env');

  return (
    <>
      <pre className="font-mono text-xs">{JSON.stringify({ props }, null, 2)}</pre>

      <button
        onClick={() => {
          toast.success(`Welcome ${envValue}`);
        }}
        className="btn btn-success"
      >
        Click Me
      </button>
    </>
  );
}

export default UiComponents;
