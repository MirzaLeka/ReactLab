
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class MyForm extends Component {
  
  state = {
    text: ''
  }

  updateText = (e) => {
    this.setState({
      text: e.target.value
    });
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    
    if (!this.state.text) {
      return alert('Please enter text!');
    }
    
    alert('Good job!');
    
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.text} onChange={this.updateText} type="text"/>
        <button>Submit</button>
      </form>
    );
  }
}

ReactDOM.render(<MyForm/>, document.querySelector('#app'));