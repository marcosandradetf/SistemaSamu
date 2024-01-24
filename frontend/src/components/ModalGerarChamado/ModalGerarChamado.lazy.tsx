import React, { lazy, Suspense } from 'react';

const LazyModalGerarChamado = lazy(() => import('./ModalGerarChamado'));

const ModalGerarChamado = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyModalGerarChamado {...props} />
  </Suspense>
);

export default ModalGerarChamado;
