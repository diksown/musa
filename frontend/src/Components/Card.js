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

const Card = () => {
  const { titles, description } = mockGenerateProject();
  return (
    <div className="MainCardWrapper">
      <div className="MainCard">
        <ProjectTitle titles={titles} />
        <ProjectDescription description={description} />
      </div>
    </div>
  );
};

export default Card;
