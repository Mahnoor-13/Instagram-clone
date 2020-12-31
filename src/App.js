import "./App.css";
import Model from "./components/Model";
import Navbar from "./components/Navbar";
import Context from "./Global/Context";
function App() {
  return (
    <Context>
      <Navbar />
      <Model />
    </Context>
  );
}

export default App;
