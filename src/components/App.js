import React from 'react';
import Header from './Header';

export default ({ children }) => {
  return (
    <div className="app">
      <div className="navBar"></div>
      <Header />
      {children}
  </div>
  );
};
