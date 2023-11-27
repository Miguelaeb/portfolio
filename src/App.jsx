import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Projects from "./components/Projects";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n" // Importa la configuración de i18n

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <div className=" relative bg-[url('../images/grid.svg')] bg-background-color px-8 py-4 lg:px-0">
        <Navbar />
        <Header />
        <main className="relative max-w-2xl mx-auto text-center mb-14 lg:max-w-3xl xl:max-w-6xl">
          <Projects />
          <About />
          <Technologies />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </I18nextProvider>
  );
}

export default App;
