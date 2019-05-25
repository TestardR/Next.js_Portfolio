// import React, { Component, Fragment } from 'react';

// class Header extends Component {
//   render() {
//     return (
//       <Fragment>

//         <Link href="/about">
//           <a className="routes">About</a>
//         </Link>
//         <Link href="/portfolios">
//           <a className="routes">Portfolios</a>
//         </Link>
//         <Link href="/blogs">
//           <a className="routes">Blogs</a>
//         </Link>
//         <Link href="/cv">
//           <a className="routes">CV</a>
//         </Link>
//         <style jsx>
//           {`
//             a {
//               font-size: 20px;
//             }
//           `}
//         </style>
//       </Fragment>
//     );
//   }
// }

// export default Header;

import React from 'react';
import Link from 'next/link';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const BsNavLink = props => {
  const { route, title } = props;
  return (
    <Link href={route}>
      <a className="nav-link">{title}</a>
    </Link>
  );
};

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Romain Testard</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <BsNavLink route="/" title="Home" />
              </NavItem>
              <NavItem>
                <BsNavLink route="/about" title="About" />
              </NavItem>

              <NavItem>
                <BsNavLink route="/portfolios" title="Portfolio" />
              </NavItem>

              <NavItem>
                <BsNavLink route="/cv" title="CV" />
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
