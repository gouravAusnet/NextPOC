import React from 'react';
import Link from 'next/link';

const about = (): JSX.Element => {
  return (
    <>
      <Link href="/">
        <a>Home</a>
      </Link>
      <div className="container">
        <span>about</span>
      </div>
    </>
  );
};

export default about;
