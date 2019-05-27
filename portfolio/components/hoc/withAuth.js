import React from 'react';
import BaseLayout from '../layout/BaseLayout';
import BasePage from '../layout/BasePage';

export default function(Component) {
  return class withAuth extends React.Component {
    renderProtectedPage() {
      const { isAuthenticated } = this.props.auth;

      if (isAuthenticated) {
        return <Component {...this.props} />;
      } else {
        return (
          <BaseLayout {...this.props.auth}>
            <BasePage>
              <h2>
                You are not authenticated. Please Login to access this page.{' '}
              </h2>
            </BasePage>
          </BaseLayout>
        );
      }
    }

    render() {
      return this.renderProtectedPage();
    }
  };
}
