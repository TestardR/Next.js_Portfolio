import React from 'react';
import BaseLayout from '../components/layout/BaseLayout';
import BasePage from '../components/layout/BasePage';
import withAuth from '../components/hoc/withAuth';
import PortfolioForm from '../components/portfolios/PortfolioForm';
import { Row, Col } from 'reactstrap';

const PortfolioNew = props => {
  return (
    <BaseLayout {...props.auth}>
      <BasePage className="portfolio-create-page" title="Create new Portfolio">
        <Row>
          <Col md="6">
            <PortfolioForm />
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  );
};

export default withAuth('siteOwner')(PortfolioNew);
