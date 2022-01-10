import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

interface CommonLayoutProps {
  children: React.ReactNode;
}

export const CommonLayout = ({ children }: CommonLayoutProps) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
};
