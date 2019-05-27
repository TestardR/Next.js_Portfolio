import React, { Component } from 'react';
import BaseLayout from '../components/layout/BaseLayout';
import BasePage from '../components/layout/BasePage';

class CV extends Component {
  render() {
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage>
          <div>I am CV page...</div>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default CV;
