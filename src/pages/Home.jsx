import { useState, useEffect } from "react";

// Import Components
import NavBar from "../components/NavBar";

// Import Sections
import Header from "../sections/Header";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Career from "../sections/Career";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";

// Import Styles
import "../styles/css/home.css";

// Import Images
import Scroll from "../assets/scroll.png";

function Home() {
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    if (window.scrollY > 50) { // Wenn der Benutzer mehr als 50px nach unten scrollt
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="Home">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Career />
      <Contact />
      <Footer />
      {isVisible && <img className="scroll-icon" src={Scroll} alt="Scroll Icon"></img>}
    </div>
  );
}

export default Home;
