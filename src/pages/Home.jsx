import { useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";
import Header from "../components/Header";
import Projects from "../components/Projects";
import About from "../components/About";
import Technologies from "../components/Technologies";
import Education from "../components/Education";
import Contact from "../components/Contact";
import PropTypes from "prop-types";

export default function Home({ isNavbarOpen }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [isNavbarOpen]);

  Home.propTypes = {
    isNavbarOpen: PropTypes.func.isRequired,
  };

  return (
    <I18nextProvider i18n={i18n}>
      <main
        className={`relative max-w-2xl mx-auto text-center mb-14 lg:max-w-3xl xl:max-w-6xl ${
          isNavbarOpen ? "blur-sm xl:blur-none" : ""
        }`}
      >
        <Header />
        <Projects />
        <About />
        <Technologies />
        <Education />
        <Contact />
      </main>
    </I18nextProvider>
  );
}
