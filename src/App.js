import Facility from "./components/Facility";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Company from "./components/Company";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

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
          <Route path="/contact" exact element={<Contact />}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
