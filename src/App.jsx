import React, { useState } from "react";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Form from "./pages/Form";
import Footer from "./components/Footer";
// import { useLenis } from "lenis/react";
import Menu from "./components/Menu";
import Loader from "./components/Loader";

const App = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [loaderDone, setLoaderDone] = useState(false);
  const handleMenuToggle = () => {
    setToggleMenu((prev) => !prev);
  };
  const handleScrollLinks = (id)=>{
    const element = document.getElementById(id);

    if(element){
      element.scrollIntoView({behavior : 'smooth'})
    }
  }
  // const lenis = useLenis(({ scroll }) => {
  //   // called every scroll
  // });
  return (
    <>
      {!loaderDone && <Loader setLoaderDone={setLoaderDone} />}
      {loaderDone && (
        <>
          <Menu handleScrollLinks={handleScrollLinks} toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
          <div className="px-4 sm:px-10 lg:px-20">
            <Home handleScrollLinks={handleScrollLinks}   toggleMenu={toggleMenu} handleMenuToggle={handleMenuToggle} />
            <Projects />
            <About handleScrollLinks={handleScrollLinks} />
            <Skills/>
            <Form />
            <Footer />
          </div>
        </>
      )}
    </>
  );
};

export default App;
