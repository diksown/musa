import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

let ActionBar = () => {
  return (
    <div className="ActionBar">
      <div className="InfoButton">
        <FontAwesomeIcon icon={faCircleInfo} />
      </div>
      <div className="RefreshButton">click to generate</div>
      <div className="GithubButton">
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

let ContentCard = ({ title, description }) => {
  return (
    <div className="ContentCard">
      <ProjectTitle content={title} />
      <ProjectDescription content={description} />
    </div>
  );
};

let mockTitle = "1. MILKIEST\n2. MOMS ON THE RUN\n3. MOTHER OF ALL PROJECTS";
let mockContent =
  "One possible code project about mothers is a Mother's Day Card Generator. This project would involve creating a web page where users could input their mothers' names and some information about them. The web page would then generate a custom Mother's Day card for the user to share with their mother.";

let MainCard = () => {
  return (
    <div className="MainCard">
      <ContentCard title={mockTitle} description={mockContent} />
      <ActionBar />
    </div>
  );
};

let App = () => {
  return (
    <div className="App">
      <MainCard />
    </div>
  );
};

export default App;
