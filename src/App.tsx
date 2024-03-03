import "./App.css";
import Projects from "./pages/Projects";
import AboutMe from "./pages/AboutMe";
import Experience from "./pages/Experience";
import Footer from "./pages/Footer";

function App() {
  return (
    <div className="background">
      <AboutMe />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
