import "./App.css";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import Footer from "./Components/Footer";
import CustomToaster from "./Components/CustomToaster";
import bgGradientStyle from "./Utils/gradient";
import { useState } from "react";

let App = () => {
  const [projectNumber, setProjectNumber] = useState(0);
  return (
    <div className="App" style={bgGradientStyle()}>
      <CustomToaster />
      <Navbar />
      <Card projectNumber={projectNumber} setProjectNumber={setProjectNumber} />
      <Footer />
    </div>
  );
};

export default App;
