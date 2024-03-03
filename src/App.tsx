import "./App.css";
import Projects from "./pages/Projects";
import AboutMe from "./pages/AboutMe";
import Experience from "./pages/Experience";
import { Grid, GridItem, VStack } from "@chakra-ui/react";

function App() {
  return (
    <div className="background">
      <AboutMe />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
