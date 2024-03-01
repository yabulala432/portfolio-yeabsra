import "./App.css";
import AppBox from "./components/AppBox";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <div className="app">
      <Box p={10} w={400} h={400}>
        <AppBox>App</AppBox>
      </Box>
    </div>
  );
}

export default App;
