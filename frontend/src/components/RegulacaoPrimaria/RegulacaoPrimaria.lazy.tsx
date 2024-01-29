import React, { lazy, Suspense } from 'react';

const LazyRegulacaoPrimaria = lazy(() => import('./RegulacaoPrimaria'));

const RegulacaoPrimaria = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyRegulacaoPrimaria {...props} />
  </Suspense>
);

export default RegulacaoPrimaria;
