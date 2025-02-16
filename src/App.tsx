import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ParallaxProvider } from "react-scroll-parallax";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ProjectsPage from "./pages/Projectpage.tsx";
import Loading from "./components/Loading.tsx";
import {AnimatePresence} from "framer-motion";
import {Tape} from "./components/Tape.tsx";

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 990);

        return () => clearTimeout(timer);
    }, []);
  return (
      <ParallaxProvider>
        <Router>
            <AnimatePresence mode="wait">
                {loading && <Loading />}
            </AnimatePresence>
          <div className="bg-black min-h-screen ${loading ? 'hidden' : ''}">
            <Header />
            <main>
              <Routes>
                <Route
                    path="/"
                    element={
                      <>
                        <Hero />
                        <About />
                          <Tape/>
                        <TechStack />
                        <Projects />
                        <Contact />
                      </>
                    }
                />
                  <Route path="/projectPage" element={<ProjectsPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </ParallaxProvider>
  );
}

export default App;
