import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Item from './item';

class App extends Component {

  state = {
    data: []
  }

  componentDidMount() {
      fetch('https://sharpscript-34411.firebaseio.com/.json')
      .then(res => res.json())
      .then(data => {
        this.setState({ data });
      })
      .catch(e => console.log(e));
  }

  render() {
      return (
        <div>
            { this.state.data.length === 0 ?
                <h1>Loading...</h1>
            : 
                this.state.data.map((item, i) => <Item key={i} title={item.title} description={item.description} />  )
            }
        </div>

      );  }
}

ReactDOM.render(<App/>, document.querySelector('#root'));
