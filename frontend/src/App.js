import "./App.css";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import Footer from "./Components/Footer";
import { useState } from "react";
import bgGradientStyle from "./Utils/gradient";

let App = () => {
  const [refreshFlag, setRefreshFlag] = useState(0);
  return (
    <div className="App" style={bgGradientStyle()}>
      <Navbar />
      <Card refreshFlag={refreshFlag} setRefreshFlag={setRefreshFlag} />
      <Footer />
    </div>
  );
};

export default App;
