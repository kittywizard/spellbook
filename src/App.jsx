import Header from "./components/header/Header"
import Box from "./components/box/Box"
import "./App.css"

import { useState } from "react";

function App() {

  const [user, setUser] = useState({
    name: "",
    class: "",
    level: 1
  });

  const [firstTime, setFirstTime] = useState(true);

  function formSubmit(event) {
    event.preventDefault();
    console.log(event);
  }

  return (
    <>
      <Header 
        user ={user}
      />
      {firstTime ?
        <form onSubmit={(e) => formSubmit(e)} className="start-form">
          Welcome to the Spellbook!
          <label htmlFor="name" className="label">
            Name: 
          </label>
          <input type="text" required name="name"></input>
          <label htmlFor="class" className="label">
            Class:
          </label>
          <input type="text" required name="class"></input>
          <label htmlFor="level" className="label">
            Level:
          </label>
          <input type="number" min="1" max="20"></input>

          <button type="submit" className="btn">
            Go!
          </button>
        </form>
      :
        <section className="box-container">
          <Box user={user}/>
        </section>
      }
    </>
  )
}

export default App
