import React from 'react';
import BaseLayout from '../layout/BaseLayout';
import BasePage from '../layout/BasePage';

const namespace = 'http://localhost:3000/';

export default role => {
  return Component => {
    return class withAuth extends React.Component {
      static async getInitialProps(args) {
        const pageProps =
          (await Component.getInitialProps) &&
          (await Component.getInitialProps(args));

        return { ...pageProps };
      }

      renderProtectedPage() {
        const { isAuthenticated, user } = this.props.auth;
        const userRole = user && user[`${namespace}roles`];
        let isAuthorized = false;

        if (role) {
          if (userRole && userRole === role) {
            isAuthorized = true;
          }
        } else {
          isAuthorized = true;
        }

        if (!isAuthenticated) {
          return (
            <BaseLayout {...this.props.auth}>
              <BasePage>
                <h2>
                  You are not authenticated. Please Login to access this page.{' '}
                </h2>
              </BasePage>
            </BaseLayout>
          );
        } else if (!isAuthorized) {
          return (
            <BaseLayout {...this.props.auth}>
              <BasePage>
                <h2>
                  You are not authorized. You don't have the permission to visit
                  this page.{' '}
                </h2>
              </BasePage>
            </BaseLayout>
          );
        } else {
          return <Component {...this.props} />;
        }
      }

      render() {
        return this.renderProtectedPage();
      }
    };
  };
};
