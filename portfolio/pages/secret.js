import React, { Component, Fragment } from 'react';
import BaseLayout from '../components/layout/BaseLayout';
import BasePage from '../components/layout/BasePage';
import Loader from '../components/shared/Loader';
import withAuth from '../components/hoc/withAuth';

import axios from 'axios';
import { getSecretData } from '../actions/index';

class Secret extends Component {
  constructor(props) {
    super();

    this.state = {
      secretData: []
    };
  }

  async componentDidMount() {
    const secretData = await getSecretData();

    this.setState({
      secretData
    });
  }

  displaySecretData() {
    const { secretData } = this.state;

    if (secretData && secretData.length > 0) {
      return secretData.map((data, index) => {
        return (
          <Fragment key={index}>
            <p>{data.title}</p>
            <p>{data.description}</p>
          </Fragment>
        );
      });
    } else return <Loader />;
  }

  render() {
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage>
          <h1>I am Secret page...</h1>
          {this.displaySecretData()}
        </BasePage>
      </BaseLayout>
    );
  }
}

export default withAuth(Secret);
