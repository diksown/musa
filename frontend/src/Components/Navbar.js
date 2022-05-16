import "./Navbar.css";
import { FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";
import MusaLogoImg from "../Assets/Images/musa_logo";

const MusaImg = () => {
  return <MusaLogoImg size="50" />;
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

const GithubIcon = () => {
  return (
    <IconContext.Provider value={{ size: "50px" }}>
      <div>
        <FaGithub />
      </div>
    </IconContext.Provider>
  );
};

const GithubButton = () => {
  return (
    <a
      href="https://github.com/diksown/musa"
      target="_blank"
      rel="noreferrer"
      className="GithubButton"
    >
      <GithubIcon />
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
