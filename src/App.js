import "./App.scss";
import Navbar from "./Components/Navbar";


function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <Navbar/>

      </div>
      <div className="main-content"></div>
      <h1>Hello, World! Welcome to my personal portfolio.</h1>
    </div>
  );
}

export default App;
