import React from 'react';
import BaseLayout from '../components/layout/BaseLayout';
import BasePage from '../components/layout/BasePage';
import withAuth from '../components/hoc/withAuth';
import PortfolioForm from '../components/portfolios/PortfolioForm';
import { Row, Col } from 'reactstrap';

class PortfolioNew extends React.Component {
  constructor(props) {
    super();

    this.savePortfolio = this.savePortfolio.bind(this);
  }

  savePortfolio(portfolioData) {
    alert(JSON.stringify(portfolioData, null, 2));
  }

  render() {
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage
          className="portfolio-create-page"
          title="Create new Portfolio"
        >
          <Row>
            <Col md="6">
              <PortfolioForm onSubmit={this.savePortfolio} />
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default withAuth('siteOwner')(PortfolioNew);
