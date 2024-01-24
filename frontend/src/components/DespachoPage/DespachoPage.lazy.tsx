import React, { lazy, Suspense } from 'react';

const LazyDespachoPage = lazy(() => import('./DespachoPage'));

const DespachoPage = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyDespachoPage {...props} />
  </Suspense>
);

export default DespachoPage;
