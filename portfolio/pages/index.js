import React, { Component } from 'react';
import axios from 'axios';
import BaseLayout from '../components/layout/BaseLayout';

class Index extends Component {
  static async getInitialProps() {
    let userData = {};
    // console.log('I am getInitialProps');
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/todos/1'
      );
      userData = response.data;
    } catch (error) {
      console.error(error);
    }

    return { initialData: [1, 2, 3, 4], userData };
  }

  constructor(props) {
    super(props);

    this.state = {
      title: 'I am Index Page'
    };

    // console.log('constructor');

    // this.updateTitle = this.updateTitle.bind(this);
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

  updateTitle = () => {
    this.setState({
      title: 'I am updated index page'
    });
  };

  render() {
    // debugger;
    // const title = this.state.title;
    const { title } = this.state;
    const { userData, initialData } = this.props;

    // console.log('render');
    return (
      <BaseLayout>
        <h1>I am Index</h1>
        <h2>{title}</h2>
        <h2 key={userData.id}>{userData.title}</h2>
        <button onClick={() => this.updateTitle()}>Change Me</button>
      </BaseLayout>
    );
  }
}

export default Index;
