import "./App.css";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import Footer from "./Components/Footer";
import { useState } from "react";
import bgGradientStyle from "./Utils/gradient";
import { Toaster } from "react-hot-toast";

let App = () => {
  const [refreshFlag, setRefreshFlag] = useState(0);
  return (
    <div className="App" style={bgGradientStyle()}>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 1500,
          style: {
            fontSize: "1rem",
          },
        }}
      />
      <Navbar />
      <Card refreshFlag={refreshFlag} setRefreshFlag={setRefreshFlag} />
      <Footer />
    </div>
  );
};

export default App;
