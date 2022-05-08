import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import MusaLogoImg from "../Assets/Images/musa_logo.png";

const MusaImg = () => {
  return (
    <img
      className="MusaImg"
      src={MusaLogoImg}
      alt="Musa"
      height="50px"
      width="50px"
    />
  );
};

const MusaText = () => {
  return (
    <div className="MusaText">
      <div>musa</div>
    </div>
  );
};

const MusaLogo = () => {
  return (
    <a className="MusaLogo" href=".">
      <MusaImg />
      <MusaText />
    </a>
  );
};

const GithubButton = () => {
  return (
    <a
      href="https://github.com/diksown/musa"
      _target="blank"
      className="GithubButton"
    >
      <FontAwesomeIcon icon={faGithub} />
    </a>
  );
};

const Navbar = () => {
  return (
    <div className="Navbar">
      <MusaLogo />
      <GithubButton />
    </div>
  );
};

export default Navbar;
