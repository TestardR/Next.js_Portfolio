import React, { Component, Fragment } from 'react';
import { withRouter } from 'next/router';
import BaseLayout from '../components/layout/BaseLayout';
import Axios from 'axios';
import BasePage from '../components/layout/BasePage';

class Portfolio extends Component {
  static async getInitialProps({ query }) {
    // console.log(query);
    const portfolioId = query.id;
    let portfolio = {};
    try {
      const response = await Axios.get(
        `https://jsonplaceholder.typicode.com/posts/${portfolioId}`
      );

      portfolio = response.data;
      // console.log(portfolio);
    } catch (error) {
      console.error(error);
    }

    return { portfolio };
  }

  renderPortfolio(portfolio) {
    return (
      <Fragment>
        <h1>{portfolio.title}</h1>
        <p>BODY : {portfolio.body}</p>
        <p>ID : {portfolio.id}</p>
      </Fragment>
    );
  }

  render() {
    const { portfolio } = this.props;
    // console.log(portfolio);

    return (
      <BaseLayout>
        <BasePage>
          <div>{this.renderPortfolio(portfolio)}</div>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default withRouter(Portfolio);
