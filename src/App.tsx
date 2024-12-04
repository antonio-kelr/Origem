import "./App.css";
import Home from "./components/homeSite/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./components/detalhePage/index"
import Quemsamos from "./components/detalhePage/pages/Quemsamos/Quemsamos";
import Produtos from "./components/detalhePage/pages/Produtos/Produtos";
import Contato from "./components/detalhePage/pages/Contato/Contato";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<Index/>}>
          <Route path="quem-samos" element={<Quemsamos />} />
          <Route path="produtos" element={<Produtos />} />
          <Route path="contato" element={< Contato />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
