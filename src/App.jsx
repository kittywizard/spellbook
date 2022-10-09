import Header from "./components/header/Header"
import Box from "./components/box/Box"
import "./App.css"

function App() {

  return (
    <div>
      <Header />
      <div className="box-container">
        <Box />
      </div>
    </div>
  )
}

export default App
