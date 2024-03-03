import "./App.css";
import Projects from "./pages/Projects";
import AboutMe from "./pages/AboutMe";
import Experience from "./pages/Experience";
import { VStack } from "@chakra-ui/react";

function App() {
  return (
    <div className="background">
      {/* <VStack> */}
      <AboutMe />
      <Experience />
      <Projects />
      {/* </VStack> */}
    </div>
  );
}

export default App;
