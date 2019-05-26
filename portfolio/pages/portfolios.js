import React, { Component } from 'react';
import axios from 'axios';
import { Link } from '../routes';

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
    return posts.map(post => {
      return (
        <li key={post.id}>
          <Link route={`/portfolio/${post.id}`}>
            <a style={{ fontSize: '20px' }}>{post.title}</a>
          </Link>
        </li>
      );
    });
  }

  render() {
    const { posts } = this.props;
    return (
      <BaseLayout>
        <BasePage>
          <div>I am Portfolios page</div>
          <ul>{this.renderPosts(posts)}</ul>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default Portfolios;
