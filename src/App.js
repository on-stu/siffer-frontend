import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SizeSearchPage from "./pages/SizeSearchPage";
import AboutPage from "./pages/AboutPage";
import { useEffect, useState } from "react";
import SideBar from "./components/SideBar";
import MySizeIndex from "./pages/MySizePage/MySizeIndex";
import ScrollToTop from "./components/ScrollToTop";
import MeasureService from "./pages/MySizePage/MeasureService";
import SelfRegistration from "./pages/MySizePage/SelfRegistration";

function App() {
  const [headerBackground, setHeaderBackground] = useState(false);
  const [sideBar, setSideBar] = useState(false);

  const scrollEvent = () => {
    if (window.scrollY > 100) {
      setHeaderBackground(true);
    } else {
      setHeaderBackground(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollEvent);
    return () => {
      window.removeEventListener("scroll", scrollEvent);
    };
  }, []);

  return (
    <>
      <Router>
        <ScrollToTop />
        <Header
          background={headerBackground}
          sideBar={sideBar}
          setSideBar={setSideBar}
        />
        <SideBar visible={sideBar} setVisible={setSideBar} />
        <Routes>
          <Route path="/" element={<AboutPage />} />
          <Route path="/sizesearch" element={<SizeSearchPage />} />
          <Route path="/mysize" element={<MySizeIndex />} />
          <Route path="/measure" element={<MeasureService />} />
          <Route path="/selfregistration" element={<SelfRegistration />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
