import { useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import projects from "../projectData";

<ProjectCard />;

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
