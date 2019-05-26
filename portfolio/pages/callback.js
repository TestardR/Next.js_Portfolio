import React, { Component } from 'react';
import { withRouter } from 'next/router';

import BaseLayout from '../components/layout/BaseLayout';
import BasePage from '../components/layout/BasePage';
import auth0Client from '../services/auth0';

class Callback extends Component {
  async componentDidMount() {
    await auth0Client.handleAuthentication();
    this.props.router.push('/');
  }

  render() {
    return (
      <BaseLayout>
        <BasePage>
          <div>Verifying login data...</div>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default withRouter(Callback);
