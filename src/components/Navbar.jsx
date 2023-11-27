import { useState, useEffect, useRef, useCallback } from "react";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const [isNavbarOpen, setisNavbarOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const navbarRef = useRef(null);

  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    toggleDropdown();
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setisNavbarOpen(!isNavbarOpen);
  };

  const closeNavbarOnOutsideClick = useCallback(
    (event) => {
      if (
        isNavbarOpen &&
        navbarRef.current &&
        !navbarRef.current.contains(event.target)
      ) {
        setisNavbarOpen(false);
      }
    },
    [isNavbarOpen]
  );

  useEffect(() => {
    const handleOutsideClick = (event) => closeNavbarOnOutsideClick(event);

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [closeNavbarOnOutsideClick]);

  const commonLinkStyles =
    "font-semibold transition duration-200 ease-in-out font-Poppins hover:text-primaryRed hover:scale-110 flex flex-col py-2 pl-3 pr-4 rounded-md bg-background-color";

  return (
    <nav
      className="relative lg:max-w-[60rem] xl:max-w-[80rem] 2xl:max-w-[100rem] lg:mx-auto"
      ref={navbarRef}
      id="home"
    >
      <div className="flex items-center justify-between">
        <div className="transition duration-200 ease-in-out hover:scale-110">
          <img
            className="w-[40px]"
            src="/images/Logo.svg"
            alt="Logo"
          />
        </div>

        <div
          className={`navbar--links--container ${
            isNavbarOpen ? "" : "hidden"
          } bg-white w-10/12 rounded-md fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 lg:block lg:relative lg:top-0 lg:left-0 lg:transform-none lg:bg-transparent lg:w-auto`}
        >
          <ul className="flex flex-col gap-4 p-4 lg:p-0 lg:flex-row lg:space-x-8 lg:animate-none">
            <li>
              <a
                className={commonLinkStyles}
                href="#home"
              >
                {t("navbarHome")}
                <span className="mt-2 font-SourceSansPro md:hidden">
                  Back to home?
                </span>
              </a>
            </li>
            <li>
              <a
                className={commonLinkStyles}
                href="#projects"
              >
                {t("navbarProjects")}
                <span className="mt-2 font-SourceSansPro md:hidden">
                  See what I have made
                </span>
              </a>
            </li>
            <li>
              <a
                className={commonLinkStyles}
                href="#about"
              >
                {t("navbarAbout")}
                <p className="mt-2 font-SourceSansPro md:hidden">
                  Know who I am
                </p>
              </a>
            </li>
            <li>
              <a
                className={commonLinkStyles}
                href="#technologies"
              >
                {t("navbarTechnologies")}

                <p className="mt-2 font-SourceSansPro md:hidden">
                  This is what I handle
                </p>
              </a>
            </li>
            <li>
              <a
                className={commonLinkStyles}
                href="#education"
              >
                {t("navbarEducation")}

                <p className="mt-2 font-SourceSansPro md:hidden">
                  Where I get my knowledge
                </p>
              </a>
            </li>
            <li>
              <a
                className={commonLinkStyles}
                href="#contact"
              >
                {t("navbarContact")}
                <p className="mt-2 font-SourceSansPro md:hidden">
                  Let&apos;s talk
                </p>
              </a>
            </li>
          </ul>
        </div>

        <div className="flex gap-4">
          <div className="flex items-center gap-4 lg:gap-[30px]">
            <div className="flex transition duration-200 ease-in-out cursor-pointer translatetor__container hover:fill-primaryRed"></div>

            <div className="relative inline-block">
              <div
                className="flex flex-row-reverse cursor-pointer hover:border-gray-500"
                onClick={toggleDropdown}
              >
                <span
                  className={`mr-2 ${
                    isDropdownOpen
                      ? "rotate-180 transition duration-300"
                      : "transition duration-300"
                  }`}
                >
                  <svg
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
                    className="py-2 cursor-pointer hover:text-primaryRed font-Poppins"
                    onClick={() => changeLanguage("en")}
                  >
                    {t("navbarEN")}
                  </div>
                  <div
                    className="py-2 cursor-pointer hover:text-primaryRed font-Poppins"
                    onClick={() => changeLanguage("es")}
                  >
                    {t("navbarES")}
                  </div>
                </div>
              )}
            </div>

            {/* <div className="transition duration-200 ease-in-out hover:scale-110 hover:text-primaryRed">
              <i className="text-[22px] cursor-pointer fa-solid fa-moon"></i>
            </div> */}
          </div>

          <button
            className="lg:hidden burgerIcon"
            onClick={toggleMobileMenu}
          >
            <img
              className="w-[40px]"
              src="/images/Burger Icon.svg"
              alt="Burger Icon"
            />
          </button>
        </div>
      </div>
    </nav>
  );
}
