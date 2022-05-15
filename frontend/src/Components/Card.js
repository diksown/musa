import "./Card.css";
import { projects, projectIds, findProject } from "../Utils/projectShuffler";
import { useEffect } from "react";
import ShareButton from "./ShareButton";
import BackButton from "./BackButton";

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

const Project = ({ projectNumber }) => {
  const { title, description } = findProject(projectNumber);
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

const CardContent = ({ projectNumber }) => {
  if (projectNumber === 0) {
    return <Presentation />;
  } else {
    return <Project projectNumber={projectNumber} />;
  }
};

const Card = ({ projectNumber, setProjectNumber }) => {
  const handleKeyDown = (event) => {
    // If spacebar is pressed
    if (event.keyCode === 32) {
      setProjectNumber(projectNumber + 1);
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
      <div className="Card" onClick={() => setProjectNumber(projectNumber + 1)}>
        {projectNumber > 0 && <ShareButton projectNumber={projectNumber} />}
        {projectNumber > 1 && (
          <BackButton
            projectNumber={projectNumber}
            setProjectNumber={setProjectNumber}
          />
        )}
        <CardContent projectNumber={projectNumber} />
      </div>
    </>
  );
};

export default Card;
