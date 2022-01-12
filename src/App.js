import { Routes, Route } from "react-router-dom";
import { Home, Work } from "./containers";
import "./css/base.css";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        {/* <Route path = "/resume.pdf" element={<Resume />} /> */}
      </Routes>
    </div>
  );
}

export default App;
