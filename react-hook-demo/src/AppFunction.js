import React, {useState} from 'react';

function App(){

  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(true);

  /*
  * Note here count work as this.state.count & setCount as this.setState({count})
  */

  const incrementCount = () => {
    setCount(prevCount => prevCount+1);
  }

  const onImageToggle = () => {
    setIsOn(prevIsOn => !prevIsOn);
  }

  return (
    <>
      <h2>Couter</h2>
      <button onClick = {incrementCount}> Button click count {count}</button>
      <h2> Flash Light Toggle</h2>
      <div
        style= {{
          width: "50px",
          height: "50px",
          background: isOn ? "green" : "red"
        }}

        onClick = {onImageToggle}
      >
      </div>
    </>
  );
}


export default App;
