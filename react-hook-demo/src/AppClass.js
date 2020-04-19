import React, {Component} from 'react';

class App extends Component{
  state = {
    count: 0
  }
  incrementCount = () => {
    this.setState({
      count: this.state.count+1
    })
  }
  render(){
    return (
      <button onClick = {this.incrementCount}> Button click count {this.state.count}</button>
    );
  }
}

export default App;
