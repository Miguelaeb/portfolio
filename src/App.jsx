import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen relative bg-[url('../images/grid.svg')] bg-background-color px-8 py-4 lg:px-0 dark:bg-black dark:bg-[url('../images/grid1.svg')] overflow-hidden">
      <Router>
        <Navbar setIsNavbarOpen={setIsNavbarOpen} />
        <Routes>
          <Route path="/" element={<Home isNavbarOpen={isNavbarOpen} />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer isNavbarOpen={isNavbarOpen} />
      </Router>
    </div>
  );
}

export default App;
