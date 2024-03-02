import "./App.css";
import ExperienceListBox, { experience } from "./components/ExperienceListBox";
import AboutMe from "./pages/AboutMe";
import Experience from "./pages/Experience";

function App() {
  return (
    <div className="background">
      <AboutMe />
      <Experience />
    </div>
  );
}

export default App;
