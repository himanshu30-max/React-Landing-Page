import React from "react";
import Header from './Components/Header';
import Feature from './Components/Feature';
import About from "./Components/About";
import Presentation from "./Components/Presentation";
import aboutimage from './images/Frame 19.png';
import aboutimage1 from './images/download.png';
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";



function App() {
  return (
    <div className="App">
      <Header />
      <Feature />
      <About image={aboutimage} title='Comes to us to make your Sweet Home Smart' button='Get the App' />
      <Presentation />
      <About image={aboutimage1} title='Download and Get the App now' button='Download the App' />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
