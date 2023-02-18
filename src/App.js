import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'

//components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

// Pages
import Home from "./pages/Home/Home";
import Orcamentos from "./pages/Orcamentos/Orcamentos";
import About from "./pages/About/About";
import Servicos from "./pages/Servicos/Servicos";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
          <Routes>
              <Route path="/" element={ < Home />} />
              <Route path="/servicos" element={ < Servicos />} />
              <Route path="/orcamentos" element={ < Orcamentos />} />
              <Route path="/about" element={ < About />} />
          </Routes>
        < Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
