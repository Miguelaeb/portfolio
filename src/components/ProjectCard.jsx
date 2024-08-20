import PropTypes from "prop-types";

export default function ProjectCard({
  title,
  image,
  githubLink,
  liveLink,
  technologies,
}) {
  return (
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
            <i className="text-xl fa-brands fa-github hover:text-portfolio-primary-color-red dark:text-white dark:hover:text-[#3B82F6]"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
};
