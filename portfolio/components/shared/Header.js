import React, { Component, Fragment } from 'react';
import Link from 'next/link';

class Header extends Component {
  render() {
    return (
      <Fragment>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/portfolios">
          <a>Portfolios</a>
        </Link>
        <Link href="/blogs">
          <a>Blogs</a>
        </Link>
        <Link href="/cv">
          <a>CV</a>
        </Link>
      </Fragment>
    );
  }
}

export default Header;
