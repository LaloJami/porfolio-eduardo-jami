import React from 'react';
import { Header } from './Header';
import '../styles/components/Layout.css'

const Layout = ({children}) => {
  return (
    <div className="main">
      <Header />
      {children}
    </div>
  );
};

export { Layout };