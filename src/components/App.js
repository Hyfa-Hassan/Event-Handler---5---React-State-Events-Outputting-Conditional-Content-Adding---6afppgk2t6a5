import React from 'react'
import '../styles/App.css';
const App = () => {
  
  const formC = (e) =>{
    e.preventDefault();
  }
  const disp = () => {
    console.log("form submitted");
  }

  return (
    <div id="main">
      <form onChange={(e)=>formC(e)}>
        <label htmlFor='name'>Name</label>
        <input id="name" type={"text"} />

        <br />
        <br />
        <button type='submit' onClick={disp}>Submit</button>
      </form>
    </div>
  )
}


export default App;
