import { useEffect, useState } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import ForgotPassword from "./pages/ForgotPassword";
import { TitleNameContext } from "./context/TitleNameContext";

function App() {
  const [titleName, setTitleName] = useState("This is testing");

  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <TitleNameContext.Provider value={{ titleName, setTitleName }}>
      <Routes>
        <Route path="/" element={<ForgotPassword />} />
      </Routes>
    </TitleNameContext.Provider>
  );
}
export default App;
