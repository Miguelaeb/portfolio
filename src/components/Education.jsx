import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const educationData = [
  {
    name: "ITSC",
    link: "https://www.itsc.edu.do/",
    logo: "./images/itsc_logo.jpg",
    program: "Software Development",
    year: 2018,
  },
  {
    name: "Udemy",
    link: "https://www.udemy.com/",
    logo: "./images/udemy_logo.png",
    program: "Web Development Bootcamp",
    year: 2019,
  },
  {
    name: "freeCodeCamp",
    link: "https://www.freecodecamp.org/",
    logo: "./images/freeeCodeCamp_logo.png",
    program: "Responsive Web Design",
    year: 2020,
  },
  {
    name: "Alura Latam",
    link: "https://www.aluracursos.com/",
    logo: "./images/alura_logo.png",
    program: "Front-End Development",
    year: 2023,
  },
];

const EducationItem = ({ name, link, logo, program, year }) => (
  <a href={link} target="_blank" rel="noreferrer">
    <img
      className="object-scale-down object-center mx-auto mb-4 lg:ease-in-out lg:duration-300 lg:transition lg:h-48 md:h-36 rounded-xl lg:hover:scale-110"
      src={logo}
      alt={name}
    />
    <p className="font-semibold font-SourceSansPro dark:text-portfolio-background-color">
      {`${program} | ${year} | ${name}`}
    </p>
  </a>
);

EducationItem.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  program: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
};

export default function Education() {
  const { t } = useTranslation();

  return (
    <section className="mt-20">
      <h2>{t("educationTitle")}</h2>

      <div className="line w-full h-[2px] bg-primaryGrey mt-2"></div>

      <div className="relative items-center w-full mt-14">
        <div className="grid w-full grid-cols-1 gap-12 dark:text-white md:grid-cols-2 xl:grid-cols-3">
          {educationData.map((edu, index) => (
            <EducationItem key={index} {...edu} />
          ))}
        </div>
      </div>
      <div id="contact"></div>
    </section>
  );
}
