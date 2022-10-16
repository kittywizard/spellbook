import Header from "./components/header/Header"
import Box from "./components/box/Box";
import { useContext } from "react";
import {Context} from "./Context";

import { useState } from "react";
import {Route, Routes, Link} from "react-router-dom";
import Home from "./pages/Home";
import SpellSelect from "./pages/SpellSelect";
import Start from "./pages/Start";

const App:React.FC = () => {

  const  {user, setUser} = useContext(Context);

  const [firstTime, setFirstTime] = useState(true);

  function formSubmit(event: any) {
    event.preventDefault();
    setUser(({
      name: event.target.name.value,
      class: event.target.class.value,
      level: event.target.level.value
    }));
    setFirstTime(false);
  }

  return (
    <>
      <Header />
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
          <input type="number" min="1" max="20" name="level"></input>

          <button type="submit" className="btn">
            Go!
          </button>
        </form>
      :
        <section className="box-container">
          <Box />
        </section>
      }
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/start" element={<Start/>} />
          <Route path="/select" element={<SpellSelect/>} />
      </Routes>
    </>
  )
}

export default App
