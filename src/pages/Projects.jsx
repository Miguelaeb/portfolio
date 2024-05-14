import { useEffect } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import projects from "../projectData";

// ProjectCard component
const ProjectCard = ({ title, image, githubLink, liveLink }) => (
  <div>
    <a href={liveLink} target="_blank" rel="noreferrer">
      <img
        className="object-center w-full mb-4 shadow-md cursor-pointer lg:ease-in-out lg:duration-300 lg:transition lg:h-48 md:h-36 rounded-xl lg:hover:scale-110"
        src={image}
        alt={title}
      />
    </a>

    <div className="flex justify-between">
      <p className="text-lg font-semibold font-SourceSansPro dark:text-portfolio-background-color dark:text-white">
        {title}
      </p>

      <div className="flex gap-8">
        <a href={githubLink} target="_blank" rel="noreferrer">
          <i className="text-xl fa-brands fa-github hover:text-portfolio-primary-color-red hover:text-primaryRed dark:text-white dark:hover:text-[#3B82F6]"></i>
        </a>
      </div>
    </div>
  </div>
);

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired,
};

// Projects component
export default function Projects() {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll up when the page load
  }, []);

  return (
    <section className="max-w-2xl mx-auto mt-20 mb-14 lg:max-w-3xl xl:max-w-6xl">
      <Link to="/">
        <div className="flex items-center gap-2">
          <svg
            className="w-2 stroke-black dark:stroke-white"
            viewBox="0 0 5 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4.5 1L1.5 4L4.5 7" stroke="current" />
          </svg>
          <span className="font-semibold font-SourceSansPro font dark:text-white">
            {t("homeProjectButtonm")}
          </span>
        </div>
      </Link>

      <h1 className="mt-6">{t("projectsTitle")}</h1>

      {/* <div className="line w-full h-[2px] bg-primaryGrey mt-2"></div> */}

      <div className="relative items-center w-full mt-14">
        <div className="grid w-full grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>

      <div id="about"></div>
    </section>
  );
}
