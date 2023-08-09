import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Weathergetting from "./pages/Weatherdisplay";
import Home from "./pages/Home";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/weather" element={<Weathergetting/>} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
