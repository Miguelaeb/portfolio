// Navbar.js
import { useState, useEffect, useRef, useCallback } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

export default function Navbar({ setIsNavbarOpen, setIsMenuClosing }) {
  const [isNavbarOpen, setisNavbarOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navbarRef = useRef(null);

  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const location = useLocation();

  const toggleMobileMenu = () => {
    setisNavbarOpen(!isNavbarOpen);
    setIsNavbarOpen(!isNavbarOpen);
    setIsMenuClosing(true);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    toggleDropdown();
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closeMenu = () => {
    setisNavbarOpen(false);
    setIsNavbarOpen(false);
    setIsMenuClosing(true);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark");
  };

  const closeNavbarOnOutsideClick = useCallback(
    (event) => {
      if (
        isNavbarOpen &&
        navbarRef.current &&
        !navbarRef.current.contains(event.target)
      ) {
        setisNavbarOpen(false);
        setIsNavbarOpen(false);
        setIsMenuClosing(true);
      }
    },
    [isNavbarOpen, setIsNavbarOpen, setIsMenuClosing]
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const shouldCollapseNavbar = scrollPosition > 0;
      setScrolled(shouldCollapseNavbar);
    };

    window.addEventListener("scroll", handleScroll);

    const handleOutsideClick = (event) => closeNavbarOnOutsideClick(event);
    document.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [closeNavbarOnOutsideClick]);

  Navbar.propTypes = {
    setIsNavbarOpen: PropTypes.func.isRequired,
    setIsMenuClosing: PropTypes.func.isRequired,
  };

  return (
    <div
      className={`fixed top-0 left-0 z-50 py-4 px-8 xl:left-1/2 xl:-translate-x-1/2 ${
        isScrolled
          ? "w-full rounded-none shadow-md bg-[#ECECEE] dark:bg-current"
          : "w-full lg:rounded-xl "
      }`}
    >
      <nav className="relative lg:max-w-[60rem] xl:max-w-[80rem] 2xl:max-w-[100rem] lg:mx-auto">
        <div className="flex items-center justify-between">
          <div className="transition duration-200 ease-in-out hover:scale-110">
            <Link to="/">
              <svg
                className={` w-[35px] dark:fill-white ${
                  isNavbarOpen ? "blur-sm xl:blur-none" : ""
                }`}
                viewBox="0 0 56 70"
                fill="current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M46 68L19 19L28 2L55 51L46 68Z"
                  fill="current"
                  stroke="current"
                />
                <path
                  d="M16.5 24L1 53.5L20 51.5L26 41L16.5 24Z"
                  fill="current"
                  stroke="current"
                />
              </svg>
            </Link>
          </div>

          <div
            className={`navbar--links--container ${
              isNavbarOpen ? "" : "hidden"
            } fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 xl:block xl:relative xl:top-0 xl:left-0 xl:transform-none w-full`}
          >
            {location.pathname !== "/projects" && (
              <div
                onClick={closeMenu}
                className="flex items-center justify-center w-full h-screen xl:w-auto xl:h-auto linksContainer"
              >
                <ul className="flex flex-col w-10/12 gap-4 p-4 bg-white rounded-md xl:p-0 xl:flex-row xl:space-x-8 xl:animate-none xl:bg-transparent lg:w-1/2 xl:w-auto dark:bg-black">
                  <li>
                    <a
                      className="navLink"
                      href="#home"
                      onClick={closeMenu}
                    >
                      {t("navbarHome")}
                      <span className="mt-2 font-SourceSansPro xl:hidden">
                        {t("navbarSubHome")}
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="navLink"
                      href="#projects"
                      onClick={closeMenu}
                    >
                      {t("navbarProjects")}
                      <span className="mt-2 font-SourceSansPro xl:hidden">
                        {t("navbarSubProjects")}
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="navLink"
                      href="#about"
                      onClick={closeMenu}
                    >
                      {t("navbarAbout")}
                      <p className="mt-2 font-SourceSansPro xl:hidden">
                        {t("navbarSubAbout")}
                      </p>
                    </a>
                  </li>
                  <li>
                    <a
                      className="navLink"
                      href="#technologies"
                      onClick={closeMenu}
                    >
                      {t("navbarTechnologies")}
                      <p className="mt-2 font-SourceSansPro xl:hidden">
                        {t("navbarSubTechnologies")}
                      </p>
                    </a>
                  </li>
                  <li>
                    <a
                      className="navLink"
                      href="#education"
                      onClick={closeMenu}
                    >
                      {t("navbarEducation")}
                      <p className="mt-2 font-SourceSansPro xl:hidden">
                        {t("navbarSubEducation")}
                      </p>
                    </a>
                  </li>
                  <li>
                    <a
                      className="navLink"
                      href="#contact"
                      onClick={closeMenu}
                    >
                      {t("navbarContact")}
                      <p className="mt-2 font-SourceSansPro xl:hidden">
                        {t("navbarSubContact")}
                      </p>
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div
            className={` ${
              isNavbarOpen ? "blur-sm xl:blur-none" : ""
            } flex gap-4 `}
          >
            <div className="flex items-center gap-4 lg:gap-[30px]">
              <div className="flex transition duration-200 ease-in-out cursor-pointer translatetor__container hover:fill-primaryRed"></div>

              <div className="relative inline-block">
                <div
                  className="flex flex-row-reverse cursor-pointer hover:border-gray-500"
                  onClick={toggleDropdown}
                >
                  <span
                    className={` ${
                      isDropdownOpen
                        ? "rotate-180 transition duration-300"
                        : "transition duration-300"
                    }`}
                  >
                    <svg
                      className="w-4 dark:fill-white"
                      width="16"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      data-name="Layer 1"
                      viewBox="0 0 32 32"
                      id="down-arrow"
                    >
                      <path d="M16 22a2 2 0 0 1-1.41-.59l-10-10a2 2 0 0 1 2.82-2.82L16 17.17l8.59-8.58a2 2 0 0 1 2.82 2.82l-10 10A2 2 0 0 1 16 22Z"></path>
                    </svg>
                  </span>
                  <svg
                    className="dark:fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    id="translate"
                  >
                    <path
                      fill="none"
                      d="M0 0h24v24H0V0z"
                    ></path>
                    <path d="M12.65 15.67c.14-.36.05-.77-.23-1.05l-2.09-2.06.03-.03c1.74-1.94 2.98-4.17 3.71-6.53h1.94c.54 0 .99-.45.99-.99v-.02c0-.54-.45-.99-.99-.99H10V3c0-.55-.45-1-1-1s-1 .45-1 1v1H1.99c-.54 0-.99.45-.99.99 0 .55.45.99.99.99h10.18C11.5 7.92 10.44 9.75 9 11.35c-.81-.89-1.49-1.86-2.06-2.88-.16-.29-.45-.47-.78-.47-.69 0-1.13.75-.79 1.35.63 1.13 1.4 2.21 2.3 3.21L3.3 16.87c-.4.39-.4 1.03 0 1.42.39.39 1.02.39 1.42 0L9 14l2.02 2.02c.51.51 1.38.32 1.63-.35zM17.5 10c-.6 0-1.14.37-1.35.94l-3.67 9.8c-.24.61.22 1.26.87 1.26.39 0 .74-.24.88-.61l.89-2.39h4.75l.9 2.39c.14.36.49.61.88.61.65 0 1.11-.65.88-1.26l-3.67-9.8c-.22-.57-.76-.94-1.36-.94zm-1.62 7l1.62-4.33L19.12 17h-3.24z"></path>
                  </svg>
                </div>
                {isDropdownOpen && (
                  <div className="absolute z-50 p-4 mt-2 bg-white border rounded-md shadow">
                    <div
                      className="py-2 cursor-pointer hover:text-primaryRed font-Poppins dark:hover:text-[#3B82F6]"
                      onClick={() => changeLanguage("en")}
                    >
                      English
                    </div>
                    <div
                      className="py-2 cursor-pointer hover:text-primaryRed font-Poppins dark:hover:text-[#3B82F6]"
                      onClick={() => changeLanguage("es")}
                    >
                      Español
                    </div>
                  </div>
                )}
              </div>

              <div
                className="transition duration-200 ease-in-out hover:scale-110 switch"
                onClick={toggleDarkMode}
              >
                {isDarkMode ? (
                  <i className="text-[22px] cursor-pointer fa-solid fa-sun text-white"></i>
                ) : (
                  <i className="text-[22px] cursor-pointer fa-solid fa-moon"></i>
                )}
              </div>
            </div>
            {location.pathname !== "/projects" && (
              <button
                className="xl:hidden burgerIcon"
                onClick={toggleMobileMenu}
              >
                <svg
                  className="w-10 fill-black stroke-black dark:fill-white dark:stroke-white"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="align-right-svgrepo-com (1) 1">
                    <g id="SVGRepo_iconCarrier">
                      <g id="Complete">
                        <g id="align-right">
                          <g id="Group">
                            <path
                              id="Vector"
                              d="M53.0663 48H29.5996H53.0663Z"
                              fill="current"
                              stroke="current"
                              strokeWidth="5.33333"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              id="Vector_2"
                              d="M53.3332 37.3333H10.6665H53.3332Z"
                              fill="white"
                              stroke="current"
                              strokeWidth="5.33333"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              id="Vector_3"
                              d="M53.0663 26.6667H29.5996H53.0663Z"
                              fill="current"
                              stroke="current"
                              strokeWidth="5.33333"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              id="Vector_4"
                              d="M53.3332 16H10.6665H53.3332Z"
                              fill="current"
                              stroke="current"
                              strokeWidth="5.33333"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
