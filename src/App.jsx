import LandingPage from "./LandingPage";
import contentFr from "./contentfr";
import contentEn from "./content";

function App() {
  const browserLanguage = navigator.language;

  let content;
  let browserLang = browserLanguage.startsWith("fr") ? "fr" : "en";

  if (browserLanguage.startsWith("fr")) {
    content = contentFr;
  } else {
    content = contentEn;
  }
  return (
    <div>
      <LandingPage content={content} language={browserLang} />
    </div>
  );
}

export default App;
