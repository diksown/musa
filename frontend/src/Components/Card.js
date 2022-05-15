import "./Card.css";
import projects from "../Static/projects.js";
import { useEffect } from "react";
import ShareButton from "./ShareButton";
import BackButton from "./BackButton";

const generateProject = (setProject) => {
  const randomIndex = Math.floor(Math.random() * projects.length);
  const randomProject = projects[randomIndex];
  setProject({
    title: randomProject.title,
    description: randomProject.description,
  });
};

const ProjectTitle = ({ title }) => {
  return (
    <>
      <div className="ProjectTitle">{title}</div>
    </>
  );
};

const ProjectDescription = ({ description }) => {
  return <div className="ProjectDescription">{description}</div>;
};

const Project = ({ project }) => {
  const { title, description } = project;
  return (
    <>
      <ProjectTitle title={title} />
      <ProjectDescription description={description} />
    </>
  );
};

const Presentation = () => {
  return (
    <>
      <div className="PresentationTitle">
        Let<span className="GradientHighlight"> Artificial Intelligence </span>
        choose your next programming project 🚀
      </div>
      <div className="PresentationDescription">
        Musa is a generator of coding project ideas powered by GPT3, a ML model
        that produces human-like text. To get your first inspiration, just press
        space or click on this card.
      </div>
    </>
  );
};

const CardContent = ({ project }) => {
  if (project === 0) {
    return <Presentation />;
  } else {
    return <Project project={project} />;
  }
};

const Card = ({ project, setProject }) => {
  const handleKeyDown = (event) => {
    // If spacebar is pressed
    if (event.keyCode === 32) {
      generateProject(setProject);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <>
      <div className="Card" onClick={() => generateProject(setProject)}>
        {project !== 0 && <ShareButton project={project} />}
        {project !== 0 && <BackButton setProject={setProject} />}
        <CardContent project={project} />
      </div>
    </>
  );
};

export default Card;
