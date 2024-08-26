import LandingPage from "./LandingPage";
import contentFr from "./contentfr";
import contentEn from "./content";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Tos from "./tos&privacy/Tos";
import Privacy from "./tos&privacy/Privacy";

function App() {
  const browserLanguage = navigator.language;

  const apiUrl = import.meta.env.VITE_APP_API_URL; // Access VITE APP API URL environment variable

  let content;
  let browserLang = browserLanguage.startsWith("fr") ? "fr" : "en";

  if (browserLanguage.startsWith("fr")) {
    content = contentFr;
  } else {
    content = contentEn;
  }
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage content={content} language={browserLang} />} />
        {/* <LandingPage content={content} language={browserLang} /> */}
        <Route path="/tos" element={<Tos />} />
        <Route path="privacy" element={<Privacy />} />
      </Routes>
    </Router>
  );
}

export default App;
