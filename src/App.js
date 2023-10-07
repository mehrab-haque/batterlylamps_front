import Facility from "./components/Facility";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Company from "./components/Company";

function App() {
  return (
    <div>
      <Header/>
      <div className="main-container">
        <Routes>
          <Route path="/" exact element={<Products />}/>
          <Route path="/facility" exact element={<Facility />}/>
          <Route path="/products" exact element={<Products />}/>
          <Route path="/company" exact element={<Company />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
