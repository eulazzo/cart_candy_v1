import Card from "./pages/Card";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
 

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Card />} />
        <Route path="/:id" element={<ProductPage />} />
        {/* <Route path="/:slug" element={<Card />} />
        <Route path="/:slug" element={<Card />} /> */}
      </Routes>
    </div>
  );
}

export default App;
