import { Routes, Route, useLocation } from "react-router-dom"
import Homepage from "./pages/Homepage"
import AboutUs from "./pages/AboutUs"
import ContactUs from "./pages/ContactUs";
import Why from "./pages/Why";
import Repository from "./pages/Repository";
function App() {
  const location = useLocation();
  let path = location.pathname;
  return (
    <div className={path === "/about" || path === "/contact" ? "sub_page": ""}>
      <Routes>
        <Route path="/" element={ <Homepage/> } />
        <Route path="about" element={ <AboutUs/> } />
        <Route path="contact" element={ <ContactUs/> } />
        <Route path="why" element={ <Why/> } />
        <Route path="joinus" element={ <ContactUs/> } />
        <Route path="faqs" element={ <ContactUs/> } />
        <Route path="repository" element={ <Repository/> } />
        <Route path="teach" element={ <ContactUs/> } />
        <Route path="volunteer" element={ <ContactUs/> } />
      </Routes>
    </div>
  )
}

export default App