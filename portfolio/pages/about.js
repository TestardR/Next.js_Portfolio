import React from 'react';
import BaseLayout from '../components/layout/BaseLayout';
import BasePage from '../components/layout/BasePage';

const About = props => {
  return (
    <BaseLayout {...props.auth}>
      <BasePage className="about-page">
        <div>Hello About</div>
      </BasePage>
    </BaseLayout>
  );
};

export default About;
