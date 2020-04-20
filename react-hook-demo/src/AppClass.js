import React, {Component} from 'react';

class App extends Component{
  state = {
    count: 0,
    isOn: true
  }

  componentDidMount(){
    document.title = `You have clicked ${this.state.count} times`;
  }

  componentDidUpdate(){
    document.title = `You have clicked ${this.state.count} times`;
  }

  /*
  * Enhancement : previousState used so that on each refresh we get correct state object
  */
  incrementCount = () => {
    this.setState(previousState => ({
      count: previousState.count+1
    }))
  }

  onImageToggle = () => {
    this.setState(prevIsOn => ({
      isOn :!prevIsOn.isOn
    }))
  };
  render(){
    return (
      <>
        <h2>Couter</h2>
        <button onClick = {this.incrementCount}> Button click count {this.state.count}</button>
        <h2> Flash Light Toggle</h2>
        <div
          style= {{
            width: "50px",
            height: "50px",
            background: this.state.isOn ? "green" : "red"
          }}

          onClick = {this.onImageToggle}
        >
        </div>
      </>
    );
  }
}

export default App;
