import React from "react";
import NavBar from "./Components/NavBar";
import Services from "./Components/Services";
import About from "./Components/About"
import Footer from "./Components/Footer";
import PartnerSection from "./Components/PartnerSection";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Services/>
      <About/> 
      <PartnerSection/> 
      <Footer/>    
    </div>
  );
}

export default App;
