import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmile } from "@fortawesome/free-regular-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

let Logo = () => {
  return (
    <div className="Icon InfoButton">
      <FontAwesomeIcon icon={faFaceSmile} />
    </div>
  );
};

let GithubButton = () => {
  return (
    <div className="Icon GithubButton">
      <FontAwesomeIcon icon={faGithub} />
    </div>
  );
};

let RefreshButton = () => {
  return (
    <button className="RefreshButton" onClick={() => window.location.reload()}>
      Generate
    </button>
  );
};

let Navbar = () => {
  return (
    <div className="Navbar">
      <Logo />
      <RefreshButton />
      <GithubButton />
    </div>
  );
};

export default Navbar;
