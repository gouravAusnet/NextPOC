import React from 'react';
import Link from 'next/link';

const Header = (): JSX.Element => {
  return (
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/headerContent/about">
          <a>About Us</a>
        </Link>
      </li>
      <li>
        <Link href="/blog">
          <a>Blog Post</a>
        </Link>
      </li>
    </ul>
  );
};

export default Header;
