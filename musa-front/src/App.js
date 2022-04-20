import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faker } from "@faker-js/faker";

let ActionBar = () => {
  return (
    <div className="ActionBar">
      <div className="Icon InfoButton">
        <FontAwesomeIcon icon={faCircleInfo} />
      </div>
      <div className="RefreshButton">click to generate</div>
      <div className="Icon GithubButton">
        <FontAwesomeIcon icon={faGithub} />
      </div>
    </div>
  );
};

let ProjectTitle = ({ content }) => {
  return <div className="ProjectTitle SpacedText">{content}</div>;
};

let ProjectDescription = ({ content }) => {
  return <div className="ProjectDescription SpacedText">{content}</div>;
};

let DescriptionCard = ({ title, description }) => {
  return (
    <div className="DescriptionCard">
      <ProjectTitle content={title} />
      <ProjectDescription content={description} />
    </div>
  );
};

let MainCard = ({ title, description }) => {
  return (
    <div className="MainCard">
      <DescriptionCard title={title} description={description} />
      <ActionBar />
    </div>
  );
};

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

let mockGenerateProject = () => {
  return {
    title: faker.lorem.sentences(3, "\n"),
    description: faker.lorem.paragraph(10),
    gradient: generateGradient(),
  };
};

let App = () => {
  let { title, description, gradient } = mockGenerateProject();
  return (
    <div
      className="App"
      style={{
        background: `linear-gradient(to top right, ${gradient.color1}, ${gradient.color2})`,
      }}
    >
      <MainCard title={title} description={description} gradient={gradient} />
    </div>
  );
};

export default App;
