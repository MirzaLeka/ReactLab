
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Toggle extends Component{

  state = {
     toggleSwitch: false
  }


  toggleDetails = () => {
    
    this.setState((prevstate) => {
      return {
        toggleSwitch: !prevstate.toggleSwitch   
      }
    });

  }

  render() {
    return(
        <div> 
          
          <button onClick={this.toggleDetails}>Show / Hide Details</button>  
        { this.state.toggleSwitch ? <p>Click on the button below to see the details</p> : false }
        </div>
    )
  }
}

ReactDOM.render(<Toggle />, document.querySelector('#app'));