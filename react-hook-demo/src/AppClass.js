import React, {Component} from 'react';

class App extends Component{
  state = {
    count: 0
  }
  /*
  * Enhancement : previousState used so that on each refresh we get correct state object
  */
  incrementCount = () => {
    this.setState(previousState => ({
      count: previousState.count+1
    }))
  }
  render(){
    return (
      <button onClick = {this.incrementCount}> Button click count {this.state.count}</button>
    );
  }
}

export default App;
