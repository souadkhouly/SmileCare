import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Website/Home";
import Footer from "./Components/Footer";
import SignUp from "./pages/Website/SignUp";
import Login from "./pages/Website/Loginin";
import ProfilePage from "./pages/Website/ProfilePage";
import About from "./pages/Website/About";
import Service from "./services/Service";
import PagesStudent from "./pages/Website/PagesStudent";
import PagesSick from "./pages/Website/PagesSick"; // يجب عليك استيراد هذا المكون

function App() {
  return (
    <div className="light">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/About" element={<About />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/Servic" element={<Service />} /> {/* تم تصحيح الخطأ الإملائي */}
        <Route path="/pagesSick" element={<PagesSick />} />
        <Route path="/pagesStudent" element={<PagesStudent />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;