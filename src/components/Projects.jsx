import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

// Project data
const projects = [
  {
    title: "Entertainment Web App",
    image: "./images/entertainment-web-app.png",
    githubLink: "https://github.com/Miguelaeb/AluraFlix",
    liveLink: "https://alura-flix-beige.vercel.app/",
  },
  {
    title: "Blogr Landing Page",
    image: "./images/blogr_project.png",
    githubLink: "https://github.com/Miguelaeb/blogr-landing-page",
    liveLink: "https://blogr-landing-page-toyy.onrender.com/",
  },
  {
    title: "AluraGeek",
    image: "./images/AluraGeek__preview.png",
    githubLink: "https://github.com/Miguelaeb/aluraGeek",
    liveLink:
      "https://alura-geek-gamma-ivory.vercel.app/?vercelToolbarCode=xGM-LFUfcR1CoUo",
  },
  {
    title: "Portfolio",
    image: "./images/portafolio.png",
    githubLink: "https://github.com/Miguelaeb/portfolio",
    liveLink: "https://www.migueldev.com/",
  },
];

// ProjectCard component
const ProjectCard = ({ title, image, githubLink, liveLink }) => (
  <div>
    <img
      className="object-center w-full mb-4 transition duration-300 ease-in-out shadow-md lg:h-48 md:h-36 rounded-xl hover:scale-110"
      src={image}
      alt={title}
    />

    <div className="flex justify-between">
      <p className="text-lg font-semibold font-SourceSansPro dark:text-portfolio-background-color">
        {title}
      </p>

      <div className="flex gap-8">
        <a
          href={githubLink}
          target="_blank"
          rel="noreferrer"
        >
          <i className="text-xl fa-brands fa-github hover:text-portfolio-primary-color-red hover:text-primaryRed"></i>
        </a>
        <a
          href={liveLink}
          target="_blank"
          rel="noreferrer"
        >
          <i className="text-xl fa-sharp fa-solid fa-arrow-up-right-from-square hover:text-primaryRed"></i>
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

  return (
    <div
      className="mt-20"
      id="projects"
    >
      <h2 className="text-2xl font-semibold font-Poppins lg:text-2xl xl:text-3xl dark:text-portfolio-background-color">
        {t("projectsTitle")}
      </h2>

      <div className="line w-full h-[2px] bg-primaryGrey mt-2"></div>

      <div className="relative items-center w-full mt-14">
        <div className="grid w-full grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
