import { Route, Routes } from "react-router-dom";
import { FooterComponent } from "./component/FooterComponent";
import { NavbarComponent } from "./component/NavbarComponent";
import { HomePage } from "./page/HomePage";
import { PortofolioPage } from "./page/PortofolioPage";
import { ContactPage } from "./page/ContactPage";
// import './App.css'

function App() {
  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portofolio" element={<PortofolioPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <FooterComponent />
    </>
  );
}

export default App;
