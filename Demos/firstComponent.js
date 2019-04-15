
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class FirstComponent extends Component {
  render() {
    return <div>Hello World!</div>
  }
}

ReactDOM.render(<FirstComponent/>, document.querySelector('#app'));