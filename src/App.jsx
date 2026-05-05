import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/about" element={<Layout />} />
      <Route path="/menu" element={<Layout />} />
      <Route path="/contact" element={<Layout />} />
    </Routes>
    
  );
}

export default App;