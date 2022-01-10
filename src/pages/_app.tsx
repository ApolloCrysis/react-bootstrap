import type { AppProps } from 'next/app';
import React from 'react';
import { CommonLayout } from '../components';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
