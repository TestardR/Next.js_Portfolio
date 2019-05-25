import React, { Component } from 'react';
import { withRouter } from 'next/router';
import BaseLayout from '../components/layout/BaseLayout';

class Portfolio extends Component {
  render() {
    console.log(this.props);
    return (
      <BaseLayout>
        <div>I am portfolio page...</div>
        <p>{this.props.router.query.title}</p>
      </BaseLayout>
    );
  }
}

export default withRouter(Portfolio);
