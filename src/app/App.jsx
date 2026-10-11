import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Hero from "../sections/Hero/Hero";
import About from "../sections/About/About";
import Stack from "../sections/Stack/Stack";
import Career from "../sections/Career/Career";
import Projects from "../sections/Projects/Projects";
import Contact from "../sections/Contact/Contact";

const App = () => (
  <>
    <Header />
    <main>
      <Hero />
      <About />
      <Stack />
      <Career />
      <Projects />
      <Contact />
    </main>
    <Footer />
  </>
);

export default App;
