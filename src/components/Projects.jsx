import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import projects from "../projectData";

// ProjectCard component
const ProjectCard = ({ title, image, githubLink, liveLink }) => (
  <div>
    <a
      href={liveLink}
      target="_blank"
      rel="noreferrer"
      aria-label={`View live project: ${title}`}
    >
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
        <a
          href={githubLink}
          target="_blank"
          rel="noreferrer"
          aria-label={`View GitHub repository for ${title}`}
        >
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
  const [projectsToShow, setProjectsToShow] = useState(
    window.innerWidth < 768 ? 4 : 6
  );

  useEffect(() => {
    const handleResize = () => {
      setProjectsToShow(window.innerWidth < 768 ? 4 : 6);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="mt-20">
      <h2>{t("projectsTitle")}</h2>

      <div className="line w-full h-[2px] bg-primaryGrey mt-2"></div>

      <div className="relative items-center w-full mt-14">
        <div className="grid w-full grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
          {projects.slice(0, projectsToShow).map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>

      <Link to="/projects">
        <button
          className={
            "py-2 mt-6 w-full font-SourceSansPro font-semibold text-lg text-background-color rounded-md md:self-start md:w-[250px] lg:mt-24 xl:w-[300px] hover:scale-105 transition duration-300 ease-in-out bg-primaryRed dark:bg-[#3B82F6]"
          }
        >
          {t("projectsButton")}
        </button>
      </Link>

      <div id="about"></div>
    </section>
  );
}
