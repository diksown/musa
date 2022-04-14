import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <div className="App">
      <div className="MainCard">
        <div className="ContentCard">
          <div className="ProjectTitle">
            1. MILKIEST
            <br />
            2. MOMS ON THE RUN
            <br />
            3. MOTHER OF ALL PROJECTS
          </div>
          <div className="ProjectDescription">
            One possible code project about mothers is a Mother's Day Card
            Generator. This project would involve creating a web page where
            users could input their mothers' names and some information about
            them. The web page would then generate a custom Mother's Day card
            for the user to share with their mother.
          </div>
        </div>
        <div className="ActionBar">
          <div className="InfoButton">
            <FontAwesomeIcon icon={faCircleInfo} />
          </div>
          <div className="RefreshButton">click to generate</div>
          <div className="GithubButton">
            <FontAwesomeIcon icon={faGithub} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
