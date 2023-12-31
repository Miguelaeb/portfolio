import { useState } from "react";
import classNames from "classnames";
import { useTranslation } from "react-i18next";

const PDF_URL = "./PDF/Miguel Evangelista Front end developer.pdf";

export default function Header() {
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useTranslation();

  const handleMouseOver = () => setIsHovered(true);
  const handleMouseOut = () => setIsHovered(false);
  const handleDownloadClick = () => window.open(PDF_URL, "_blank");

  const avatarSrc = isHovered
    ? "/images/hover-avatar.png"
    : "/images/avatar1.png";
  const avatarClass = classNames("avatar-1-img w-full", { hovered: isHovered });

  return (
    <header className="relative max-w-2xl mx-auto mt-20 text-center transition duration-100 ease-in-out lg:flex lg:flex-row-reverse lg:justify-between lg:max-w-3xl xl:max-w-6xl">
      <div className="max-w-[150px] mx-auto xl:max-w-[200px]">
        <img
          src={avatarSrc}
          alt="avatar-1"
          className={avatarClass}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        />
      </div>

      <div className="mt-10 lg:text-left lg:w-full lg:mt-0 lg:pr-24">
        <h1 className="text-2xl font-Poppins lg:text-3xl xl:text-4xl">
          Miguel
          <span className=" text-primaryRed">
            {" "}
            Evangelista,
            <br />
          </span>
          {t("headerTitle")}
        </h1>
        <p className="mt-6 font-SourceSansPro md:mx-28 lg:mx-0">
          {t("headerDescription")}
        </p>

        <div className="flex justify-center gap-4 mt-5 lg:justify-start">
          <a
            href="https://github.com/Miguelaeb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              className={
                "text-2xl fa-brands fa-github hover:text-primaryRed transition duration-200 ease-in-out"
              }
            ></i>
          </a>
          <a
            href="https://twitter.com/MiguelEvan56212"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="text-2xl transition duration-200 ease-in-out fa-brands fa-twitter hover:text-primaryRed"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/miguel-evangelista-8458b9150/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="text-2xl transition duration-200 ease-in-out fa-brands fa-linkedin-in hover:text-primaryRed"></i>
          </a>
          <a
            href="https://instagram.com/miguel_aeb?igshid=NTc4MTIwNjQ2YQ=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="text-2xl transition duration-200 ease-in-out fa-brands fa-instagram hover:text-primaryRed"></i>
          </a>
        </div>

        <button
          className={
            "py-2 mt-6 w-full font-SourceSansPro font-semibold text-lg text-background-color rounded-md md:self-start md:w-[250px] lg:mt-24 xl:w-[300px] hover:scale-105 transition duration-300 ease-in-out bg-primaryRed"
          }
          onClick={handleDownloadClick}
        >
          {t("resumeButton")}
        </button>
      </div>
    </header>
  );
}
