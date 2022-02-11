import React from 'react';
import MyComponent from './components/myComponent';
import Header from './components/header';

const Layout = (): JSX.Element => {
  return (
    <>
      <div className="container">
        <Header />
        <span>test</span>
        <MyComponent />
      </div>
    </>
  );
};

export default Layout;
