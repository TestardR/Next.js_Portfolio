import React, { Component } from 'react';
import BaseLayout from '../components/layout/BaseLayout';
import BasePage from '../components/layout/BasePage';

import withAuth from '../components/hoc/withAuth';

class Owner extends Component {
  render() {
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage>
          <div>I am Owner page...</div>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default withAuth('siteOwner')(Owner);
