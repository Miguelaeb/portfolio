import { useState } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

export default function Footer({ isNavbarOpen }) {
  const [year] = useState(new Date().getFullYear());
  const { t } = useTranslation();

  Footer.propTypes = {
    isNavbarOpen: PropTypes.func.isRequired,
  };

  return (
    <footer
      className={` ${
        isNavbarOpen ? "blur-sm" : ""
      } lg:mx-auto lg:w-[60rem] xl:w-[80rem] 2xl:w-[100rem] `}
      id="footer"
    >
      <div className="line w-full h-[2px] bg-portfolio-primary-color-grey mt-2"></div>

      <div className="mt-8 lg:flex lg:flex-row-reverse lg:justify-between lg:items-center">
        <div className="flex justify-center gap-4 mt-5 lg:mt-0">
          <a
            href="https://github.com/Miguelaeb"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github footerIcon"></i>
          </a>
          <a
            href="https://twitter.com/MiguelEvan56212"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-twitter footerIcon"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/miguelaer/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin-in footerIcon"></i>
          </a>
          <a
            href="https://instagram.com/miguel_aeb?igshid=NTc4MTIwNjQ2YQ=="
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-instagram footerIcon"></i>
          </a>
        </div>

        <p className="my-5 text-lg text-center font-SourceSansPro dark:text-white">
          © <span> {year} </span>
          <a
            href="https://github.com/Miguelaeb"
            target="_blank"
            rel="noreferrer"
            className=" text-primaryRed hover:text-black dark:text-[#3B82F6] dark:hover:text-white"
          >
            Miguel Evangelista™{" "}
          </a>
          {t("footerRights")}
        </p>
      </div>
    </footer>
  );
}
