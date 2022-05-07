import "./Card.css";
import projects from "../Static/projects.js";

const genColor = (hue, saturation, lightness) => {
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};

const generateGradient = () => {
  const randomHue = Math.floor(Math.random() * 360);
  const deltaHue = 70;
  const saturation = 40;
  const lightness = 60;
  return {
    color1: genColor(randomHue, saturation, lightness),
    color2: genColor(randomHue + deltaHue, saturation, lightness),
  };
};

// const generateGradientProp = (color1, color2) => {
//   return {
//     background: `linear-gradient(to top right, ${color1}, ${color2})`,
//   };
// };

const mockGenerateProject = () => {
  const randomIndex = Math.floor(Math.random() * projects.length);
  const project = projects[randomIndex];
  return {
    titles: project.titles,
    description: project.description,
    gradient: generateGradient(),
  };
};

const ProjectTitle = ({ titles }) => {
  return <div className="ProjectTitles SpacedText">{titles}</div>;
};

const ProjectDescription = ({ description }) => {
  return <div className="ProjectDescription SpacedText">{description}</div>;
};

const Project = () => {
  const { titles, description } = mockGenerateProject();
  return (
    <>
      <ProjectTitle titles={titles} />
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
        that produces human-like text. To get your first inspiration, click the
        <span> Generate </span>
        button!
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

const Card = ({ currentState }) => {
  return (
    <div className="MainCardWrapper">
      <div className="MainCard">
        <CardContent currentState={currentState} />
      </div>
    </div>
  );
};

export default Card;
