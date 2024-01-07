import LandingPage from "./LandingPage";
import contentFr from "./contentfr";
import contentEn from "./content";

function App() {
  const browserLanguage = navigator.language;

  let content;

  if (browserLanguage.startsWith("fr")) {
    content = contentFr;
  } else {
    content = contentFr;
  }
  return (
    <div>
      <LandingPage content={content} />
    </div>
  );
}

export default App;
