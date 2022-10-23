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

  return (
    <>
      <Header />

        <section className="box-container">
          <Box />
        </section>
      
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/start" element={<Start/>} />
          <Route path="/select" element={<SpellSelect/>} />
      </Routes>
    </>
  )
}

export default App;
