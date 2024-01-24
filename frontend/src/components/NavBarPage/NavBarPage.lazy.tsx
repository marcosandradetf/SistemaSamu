import React, { lazy, Suspense } from 'react';

const LazyNavBarPage = lazy(() => import('./NavBarPage'));

const NavBarPage = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyNavBarPage {...props} />
  </Suspense>
);

export default NavBarPage;
