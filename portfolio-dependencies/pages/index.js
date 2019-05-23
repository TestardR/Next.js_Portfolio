import React, { Fragment } from 'react';
import Link from 'next/link';

const Index = () => {
  return (
    <Fragment>
      <div>Hello Index</div>
      <Link href="/about">About</Link>
      <Link href="/portfolios">Portfolios</Link>
      <Link href="/blogs">Blogs</Link>
      <Link href="/cv">CV</Link>
    </Fragment>
  );
};

export default Index;
