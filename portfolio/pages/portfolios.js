import React, { Component } from 'react';
import axios from 'axios';
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
    debugger;
    return posts.map(post => {
      return (
        <li key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </li>
      );
    });
  }

  render() {
    debugger;
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
