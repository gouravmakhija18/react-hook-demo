import React, {useState} from 'react';

function App(){

  const [count, setCount] = useState(0);

  /*
  * Note here count work as this.state.count & setCount as this.setState({count})
  */

  const incrementCount = () => {
    setCount(prevCount => prevCount+1);
  }
  return (
    <button onClick = {incrementCount}> Button click count {count}</button>
  );
}


export default App;
