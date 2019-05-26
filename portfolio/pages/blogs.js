import React, { Component } from 'react';
import BaseLayout from '../components/layout/BaseLayout';
import BasePage from '../components/layout/BasePage';

class blogs extends Component {
  render() {
    return (
      <BaseLayout>
        <BasePage>
          <div>I am Blogs Page</div>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default blogs;
