import './index.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import './index.css'
export default function App() {
  return (
        <div>
          <Header />
          <Home />
          <About />
          <Projects/>
          <Contact />
          <Footer />
        </div>

  );
}