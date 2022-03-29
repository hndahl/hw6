import React, {useState} from 'react';
import './app.css';
function App() {

  const [data,setData]=useState(null);
  function getData(val)

  {
    if (val.target.value === "Heather") {
      setData("Dahl")
    } else {
      setData("User Not Found")
    }
  }
  return (
    <div className="app">
      <h2>Input Request to Server</h2>
      <h4>Type "Heather"</h4>
      <input type="text" onChange={getData}/>
      <h2>Response From Server</h2>
      <output name="result">{data}</output>
      
    </div>
  );
}

export default App;