import React, { Component } from 'react';
import BaseLayout from '../components/layout/BaseLayout';
import BasePage from '../components/layout/BasePage';

import withAuth from '../components/hoc/withAuth';

class Secret extends Component {
  static getInitialProps() {
    const secretV = 'Secret V';

    return { secretV };
  }

  render() {
    const { secretV } = this.props;
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage>
          <div>I am Secret page...</div>
          <p>{secretV}</p>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default withAuth(Secret);
