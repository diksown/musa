import "./App.css";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import Footer from "./Components/Footer";
import { useState } from "react";

let App = () => {
  const [projectState, setProjectState] = useState(0);
  return (
    <div className="App">
      <Navbar notifyClick={setProjectState} />
      <Card currentState={projectState} />
      <Footer />
    </div>
  );
};

export default App;
