import React, { Component } from 'react';
import BaseLayout from '../components/layout/BaseLayout';

class Index extends Component {
  static getInitialProps() {
    console.log('I am getInitialProps');

    return { initialData: [1, 2, 3, 4] };
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
    // const title = this.state.title;
    debugger;
    const { title } = this.state;
    const initialData = this.props.initialData;

    // console.log('render');
    return (
      <BaseLayout>
        <h1>I am Index</h1>
        <h2>{title}</h2>
        <button onClick={() => this.updateTitle()}>Change Me</button>
      </BaseLayout>
    );
  }
}

export default Index;
