import React from "react"
import './App.scss';
import Tasks from "./Components/Task/Task";
import Navbar from "./Components/Navbar/Navbar";


function App () {
  return(
    <div className="app">
      <div className="app__wrapper">
        <Navbar/>
        <Tasks/>
      </div>
    </div>

  )
}


export default App;