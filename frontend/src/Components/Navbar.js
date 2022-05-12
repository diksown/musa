import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import MusaLogoImg from "../Assets/Images/musa_logo";
import { MdContentCopy } from "react-icons/md";
import { IconContext } from "react-icons";
//import cogoToast from 'cogo-toast';
//cogoToast.success("Success!");

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

const ShareButton = () => {
  return (
    <IconContext.Provider value={{ size: "50px" }}>
      <div>
        <MdContentCopy />
      </div>
    </IconContext.Provider>
  );
};

const Navbar = () => {
  return (
    <div className="Navbar">
      <MusaLogo />
      {/* <ShareButton /> */}
      <GithubButton />
    </div>
  );
};

export default Navbar;
