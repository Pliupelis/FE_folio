import { Routes, Route } from "react-router-dom";
import { Home, Work } from "./containers";
import { Nav } from "./components";
import "./css/base.css";
function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/work" element={<Work />} />
        {/* <Route path = "/resume.pdf" element={<Resume />} /> */}
      </Routes>
    </div>
  );
}

export default App;
