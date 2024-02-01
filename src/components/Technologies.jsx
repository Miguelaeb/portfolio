import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

function TechnologyItem({ imageSrc, altText, text }) {
  return (
    <div className="flex items-center py-4 pl-2 rounded-md shadow-sm bg-primaryGrey/10 backdrop:blur-sm">
      <img
        className="w-6 mr-2"
        src={imageSrc}
        alt={altText}
      />
      <p className="font-SourceSansPro dark:text-portfolio-background-color">
        {text}
      </p>
    </div>
  );
}

TechnologyItem.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default function Technologies() {
  const { t } = useTranslation();

  const frontEndTechnologies = [
    { imageSrc: "./images/html_logo.png", altText: "HTML", text: "HTML" },
    { imageSrc: "./images/css_logo.png", altText: "CSS", text: "CSS" },
    {
      imageSrc: "./images/javascript_logo.png",
      altText: "JavaScript",
      text: "JavaScript",
    },
    { imageSrc: "./images/react_logo.png", altText: "React", text: "React JS" },
    { imageSrc: "./images/vite__logo.png", altText: "Vite", text: "Vite" },
    {
      imageSrc: "./images/tailwind_logo.png",
      altText: "Tailwind CSS",
      text: "Tailwind CSS",
    },
    {
      imageSrc: "./images/bootstrap_logo.png",
      altText: "Bootstrap",
      text: "Bootstrap",
    },
    {
      imageSrc: "./images/material_logo.png",
      altText: "Material UI",
      text: "Material UI",
    },
  ];

  const tools = [
    { imageSrc: "./images/vs_logo.png", altText: "VS Code", text: "VS Code" },
    { imageSrc: "./images/github_logo.png", altText: "GitHub", text: "GitHub" },
    { imageSrc: "./images/git_logo.png", altText: "Git", text: "Git" },
    { imageSrc: "./images/npm_logo.png", altText: "NPM", text: "NPM" },
    { imageSrc: "./images/yarn_logo.png", altText: "Yarn", text: "Yarn" },
    { imageSrc: "./images/figma_logo.png", altText: "Figma", text: "Figma" },
    { imageSrc: "./images/adobexd_logo.png", altText: "Adobe XD", text: "Adobe XD" },
    { imageSrc: "./images/photoshop_logo.png", altText: "Photoshop", text: "Photoshop" },
  ];

  const renderTechnologyList = (technologies) => (
    <div className="relative w-full mt-3">
      <div className="grid w-full grid-cols-2 gap-6 dark:text-white md:grid-cols-3 lg:grid-cols-4">
        {technologies.map((tech, index) => (
          <TechnologyItem
            key={index}
            {...tech}
          />
        ))}
      </div>
    </div>
  );

  return (
    <section className="mt-20">
      <h2>
        {t("technologiesTitle")}
      </h2>
      <div className="line w-full h-[2px] bg-primaryGrey mt-2"></div>

      <p className="text-lg font-semibold text-left mt-14 font-SourceSansPro dark:text-white">
        Front-End.
      </p>
      {renderTechnologyList(frontEndTechnologies)}

      <p className="text-lg font-semibold text-left mt-14 font-SourceSansPro dark:text-white">
        {t("technologiesTools")}
      </p>
      {renderTechnologyList(tools)}
      <div id="education"></div>
    </section>
  );
}
