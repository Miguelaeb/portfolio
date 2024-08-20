import { useState, useEffect, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import projects from "../projectData";

<ProjectCard />;

// Projects component
export default function Projects() {
  const { t } = useTranslation();
  const [projectsToShow, setProjectsToShow] = useState(
    window.innerWidth < 768 ? 4 : 6
  );

  const handleResize = useCallback(() => {
    setProjectsToShow(window.innerWidth < 768 ? 4 : 6);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

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
          className={`py-2 mt-6 w-full font-SourceSansPro font-semibold text-lg text-background-color rounded-md md:self-start md:w-[250px] lg:mt-24 xl:w-[300px] hover:scale-105 transition duration-300 ease-in-out bg-primaryRed dark:bg-[#3B82F6]`}
        >
          {t("projectsButton")}
        </button>
      </Link>

      <div id="about"></div>
    </section>
  );
}
