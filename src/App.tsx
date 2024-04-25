import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "../src/pages/navbar";
import Home from "../src/pages/home";
import About from "../src/pages/about";
import Collection from "../src/pages/collection";
import Contact from "../src/pages/contact";
import Checkout from "./pages/checkout";
import Error from "../src/pages/error";
import Footer from "./pages/footer";
import Visit from "./pages/visit/Visit";
import SingleItemDetails from "./components/Collection/SingleItemDetails";

function App() {
  return (
    <BrowserRouter>
      <section className="main-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/collection/:itemId" element={<SingleItemDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/visit" element={<Visit />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </section>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
