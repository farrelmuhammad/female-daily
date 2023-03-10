import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Provider from "./helpers/hooks/useGlobalContext";

function App() {
  return (
    <>
      <Provider>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
