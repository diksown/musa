import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import MusaLogoImg from "../Assets/Images/musa_logo.png";

const MusaLogo = () => {
  return (
    <img className="MusaLogo" src={MusaLogoImg} alt="Musa" height="50px" />
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
