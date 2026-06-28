import Header from "./layouts/Header/Header";
import Hero from "./sections/Hero/Hero";
import Readiness from "./sections/Readiness/Readiness";
import Gallery from "./sections/Gallery/Gallery";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Readiness />
        <Gallery />
      </main>
    </>
  );
}

export default App;
