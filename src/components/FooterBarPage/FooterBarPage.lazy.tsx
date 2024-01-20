import React, { lazy, Suspense } from 'react';

const LazyFooterBarPage = lazy(() => import('./FooterBarPage'));

const FooterBarPage = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyFooterBarPage {...props} />
  </Suspense>
);

export default FooterBarPage;
