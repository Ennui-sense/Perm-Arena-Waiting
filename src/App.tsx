import Header from "./layouts/Header/Header";
import Hero from "./sections/Hero/Hero";
import Readiness from "./sections/Readiness/Readiness";
import Gallery from "./sections/Gallery/Gallery";
import News from "./sections/News/News";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Readiness />
        <Gallery />
        <News />
      </main>
    </>
  );
}

export default App;
