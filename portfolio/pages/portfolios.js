import React, { Component } from 'react';
import axios from 'axios';
import Link from 'next/link';

import BaseLayout from '../components/layout/BaseLayout';

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
          <Link as={`/portfolio/${post.id}`} href={`/portfolio?id=${post.id}`}>
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
        <div>I am Portfolios page</div>
        <ul>{this.renderPosts(posts)}</ul>
      </BaseLayout>
    );
  }
}

export default Portfolios;
