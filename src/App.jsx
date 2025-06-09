import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Blog } from "./pages/Blog";
import { CaseStudy } from "./pages/CaseStudy";
import { Contact } from "./pages/Contact";
import { Faq } from "./pages/Faq";
import { Framework } from "./pages/Framework";
import { Gallery } from "./pages/Gallery";
import { Industry } from "./pages/Industry";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { Service } from "./pages/Service";
import { Team } from "./pages/Team";
import { Header } from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BlogInfo from "./pages/BlogInfo";
import Project from "./pages/Project";
import { FaWhatsapp } from "react-icons/fa6";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/case-study" element={<CaseStudy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/framework" element={<Framework />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/industry" element={<Industry />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/service" element={<Service />} />
          <Route path="/team" element={<Team />} />
          <Route path="/single-blog" element={<BlogInfo />} />
          <Route path="/project" element={<Project />} />
        </Routes>
        <Toaster position="top-center" reverseOrder={false} />
      </Router>

      <div className="fixed bottom-6 right-6 bg-green-600 text-white p-2 rounded-full cursor-pointer shadow-lg hover:bg-teal-600 transition z-50">
        <FaWhatsapp className="h-full w-full lg:text-4xl text-lg" />
      </div>

      <Footer />
    </>
  );
}

export default App;
