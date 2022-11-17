import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Description from "./components/Description";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Roadmap from "./components/Roadmap";
import Team from "./components/Team";
import Technologies from "./components/Technologies";

function App() {
  return (
    <div className="selection:bg-[#933ce9] selection:text-black scrollbar-thin scrollbar-thumb-[#750edb] scrollbar-thumb-rounded-lg h-screen">
      <Header />
      <Hero />
      <About />
      <Description />
      <Gallery />
      <Roadmap />
      <Technologies />
      <Contact />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
