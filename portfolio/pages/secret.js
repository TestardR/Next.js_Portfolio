import React, { Component } from 'react';
import BaseLayout from '../components/layout/BaseLayout';
import BasePage from '../components/layout/BasePage';

import withAuth from '../components/hoc/withAuth';

class Secret extends Component {
  render() {
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage>
          <div>I am Secret page...</div>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default withAuth(Secret);
