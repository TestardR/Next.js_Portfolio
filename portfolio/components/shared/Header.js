import React, { Component, Fragment } from 'react';
import Link from 'next/link';

class Header extends Component {
  render() {
    return (
      <Fragment>
        <Link href="/about">About</Link>
        <Link href="/portfolios">Portfolios</Link>
        <Link href="/blogs">Blogs</Link>
        <Link href="/cv">CV</Link>
      </Fragment>
    );
  }
}

export default Header;
