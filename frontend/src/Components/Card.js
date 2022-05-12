import "./Card.css";
import projects from "../Static/projects.js";
import { useEffect } from "react";

const generateProject = () => {
  const randomIndex = Math.floor(Math.random() * projects.length);
  const project = projects[randomIndex];
  return {
    title: project.title,
    description: project.description,
  };
};

const ProjectTitle = ({ title }) => {
  return <div className="ProjectTitle SpacedText">{title}</div>;
};

const ProjectDescription = ({ description }) => {
  return <div className="ProjectDescription SpacedText">{description}</div>;
};

const Project = () => {
  const { title, description } = generateProject();
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

const CardContent = ({ currentState }) => {
  if (currentState === 0) {
    return <Presentation />;
  } else {
    return <Project />;
  }
};

const Card = ({ refreshFlag, setRefreshFlag }) => {
  const handleKeyDown = (event) => {
    // If spacebar is pressed
    if (event.keyCode === 32) {
      setRefreshFlag({});
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <div className="MainCardWrapper">
      <div className="MainCard" onClick={() => setRefreshFlag({})}>
        <CardContent currentState={refreshFlag} />
      </div>
    </div>
  );
};

export default Card;
