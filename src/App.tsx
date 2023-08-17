import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";

import "./App.css";
import { Footer } from "./components/Footer";

function App() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
