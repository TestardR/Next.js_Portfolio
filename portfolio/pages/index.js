import React, { Component } from 'react';
import Typed from 'react-typed';
import { Container, Row, Col } from 'reactstrap';

import BaseLayout from '../components/layout/BaseLayout';
import BaseParticle from '../components/layout/BaseParticle';

class Index extends Component {
  constructor(props) {
    super(props);

    this.roles = ['Full-Stack Developer', 'Tech Lover', 'Hip-Hop Head'];
  }

  render() {
    return (
      <BaseLayout className="cover" {...this.props.auth}>
        <BaseParticle />
        <div className="main-section">
          <Container>
            <div className="hero-welcome-text">
              <h1>Welcome to my website</h1>
              <br />
              <Typed
                className="self-typed"
                loop
                typeSpeed={130}
                backSpeed={60}
                strings={this.roles}
                backDelay={500}
                fadeOutDelay={1000}
                loopCount={0}
                showCursor
                cursorChar="|"
              />
            </div>
            <div className="hero-welcome-bio">
              <h1>Let's take a look at my work</h1>
            </div>
          </Container>
        </div>
      </BaseLayout>
    );
  }
}

export default Index;
