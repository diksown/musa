import "./Card.css";
import projects from "../Static/projects.js";

let genColor = (hue, saturation, lightness) => {
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};

let generateGradient = () => {
  let randomHue = Math.floor(Math.random() * 360);
  let deltaHue = 70;
  let saturation = 40;
  let lightness = 60;
  return {
    color1: genColor(randomHue, saturation, lightness),
    color2: genColor(randomHue + deltaHue, saturation, lightness),
  };
};

// let generateGradientProp = (color1, color2) => {
//   return {
//     background: `linear-gradient(to top right, ${color1}, ${color2})`,
//   };
// };

let mockGenerateProject = () => {
  let randomIndex = Math.floor(Math.random() * projects.length);
  let project = projects[randomIndex];
  return {
    titles: project.titles,
    description: project.description,
    gradient: generateGradient(),
  };
};

let ProjectTitle = ({ titles }) => {
  return <div className="ProjectTitles SpacedText">{titles}</div>;
};

let ProjectDescription = ({ description }) => {
  return <div className="ProjectDescription SpacedText">{description}</div>;
};

let Card = () => {
  let { titles, description } = mockGenerateProject();
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
