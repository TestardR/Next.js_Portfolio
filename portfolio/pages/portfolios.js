import React, { Component } from 'react';
import axios from 'axios';
import { Link } from '../routes';
import {
  Col,
  Row,
  Card,
  CardHeader,
  CardBody,
  CardText,
  CardTitle,
  CardImg
} from 'reactstrap';

import BaseLayout from '../components/layout/BaseLayout';
import BasePage from '../components/layout/BasePage';

class Portfolios extends Component {
  static async getInitialProps() {
    let posts = [];
    // console.log('I am getInitialProps');
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      );
      posts = response.data;
    } catch (error) {
      console.error(error);
    }

    return { posts: posts.splice(0, 10) };
  }

  renderPosts(posts) {
    return posts.map((post, index) => {
      return (
        <Col md="4">
          <React.Fragment key={index}>
            <span>
              <Card className="portfolio-card">
                <CardImg
                  top
                  width="100%"
                  src="../static/images/js.jpg"
                  alt="Card image cap"
                />
                <CardHeader className="portfolio-card-header">
                  Some Position {index}
                </CardHeader>
                <CardBody>
                  <p className="portfolio-card-city"> Some Location {index} </p>
                  <CardTitle className="portfolio-card-title">
                    Some Company {index}
                  </CardTitle>
                  <CardText className="portfolio-card-text">
                    Some Description {index}
                  </CardText>
                  <div className="readMore"> </div>
                </CardBody>
              </Card>
            </span>
          </React.Fragment>
        </Col>
      );
    });
  }

  render() {
    const { posts } = this.props;
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage title="Portfolios" className="portfolio-page">
          <Row>{this.renderPosts(posts)}</Row>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default Portfolios;
