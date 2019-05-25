import React, { Component } from 'react';
import BaseLayout from '../components/layout/BaseLayout';

import { Container, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Index extends Component {
  render() {
    return (
      <BaseLayout>
        <Container>
          <Button color="danger">Danger !</Button>
        </Container>
      </BaseLayout>
    );
  }
}

export default Index;
