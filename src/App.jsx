import Header from "./header/Header"
import Box from "./box/Box"
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
