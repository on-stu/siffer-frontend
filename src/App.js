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
import ContentsList from "./pages/ContentsPage/ContentsList";
import ContentsView from "./pages/ContentsPage/ContentsView";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import StorePage from "./pages/StorePage";
import Practice from "./pages/ThreeJsPage/Practice";
import MeasureServiceIndex from "./pages/MesureService/Index";

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
          <Route path="/" element={<SizeSearchPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/mysize" element={<MySizeIndex />} />
          <Route path="/measure" element={<MeasureService />} />
          <Route path="/selfregistration" element={<SelfRegistration />} />
          <Route path="/contents" element={<ContentsList />} />
          <Route path="/contents/:id" element={<ContentsView />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/measure/reserve" element={<MeasureServiceIndex />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
