import type { AppProps } from 'next/app';
import React from 'react';
import { CommonLayout } from '../components';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CommonLayout>
      <Component {...pageProps} />
    </CommonLayout>
  );
}

export default MyApp;
