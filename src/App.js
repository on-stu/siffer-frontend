import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SizeSearchPage from "./pages/SizeSearchPage";
import LandingPage from "./pages/LandingPage";
import { useEffect, useState } from "react";
import SideBar from "./components/SideBar";

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
        <Header
          background={headerBackground}
          sideBar={sideBar}
          setSideBar={setSideBar}
        />
        <SideBar visible={sideBar} setVisible={setSideBar} />
        <Routes>
          <Route path="/" element={<SizeSearchPage />} />
          <Route path="landing" element={<LandingPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
