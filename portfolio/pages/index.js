import React, { Component } from 'react';
import BaseLayout from '../components/layout/BaseLayout';

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'I am Index Page'
    };

    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  updateTitle() {
    this.setState({
      title: 'I am updated index page'
    });
  }

  render() {
    console.log('render');
    return (
      <BaseLayout>
        <h1>I am Index</h1>
        <h2>{this.state.title}</h2>
        <button onClick={() => this.updateTitle()}>Change Me</button>
      </BaseLayout>
    );
  }
}

export default Index;
