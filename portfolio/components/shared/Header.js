import React, { Component, Fragment } from 'react';
import Link from 'next/link';
import '../../styles/main.scss';

class Header extends Component {
  render() {
    return (
      <Fragment>
        <Link href="/">
          <a className="routes">Home</a>
        </Link>
        <Link href="/about">
          <a className="routes">About</a>
        </Link>
        <Link href="/portfolios">
          <a className="routes">Portfolios</a>
        </Link>
        <Link href="/blogs">
          <a className="routes">Blogs</a>
        </Link>
        <Link href="/cv">
          <a className="routes">CV</a>
        </Link>
        <style jsx>
          {`
            a {
              font-size: 20px;
            }
          `}
        </style>
      </Fragment>
    );
  }
}

export default Header;
