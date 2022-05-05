import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmile } from "@fortawesome/free-regular-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const MusaLogo = () => {
  return (
    <div className="Icon">
      <FontAwesomeIcon icon={faFaceSmile} />
    </div>
  );
};

const GithubButton = () => {
  return (
    <div className="Icon GithubButton">
      <FontAwesomeIcon icon={faGithub} />
    </div>
  );
};

const RefreshButton = ({ notifyClick }) => {
  return (
    <button className="RefreshButton" onClick={() => notifyClick({})}>
      Generate
    </button>
  );
};

const Navbar = ({ notifyClick }) => {
  return (
    <div className="Navbar">
      <MusaLogo />
      <RefreshButton notifyClick={notifyClick} />
      <GithubButton />
    </div>
  );
};

export default Navbar;
