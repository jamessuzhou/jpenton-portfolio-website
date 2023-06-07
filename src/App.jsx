import Navbar_new from "./components/Navbar_new.jsx";
import About from "./components/About.jsx";
import Footer from "./components/Footer.jsx";
import Services from "./components/Services.jsx";
import Hero from "./components/Hero.jsx";
import Tours from "./components/Tours.jsx";
import Portfolio from "./components/Portfolio.jsx";

function App() {
  return (
    <>
      <Navbar_new />
      <Hero />
      <Portfolio />
      {/* <About />
      <Services />
      <Tours /> */}
      <Footer />
    </>
  );
}

export default App;
