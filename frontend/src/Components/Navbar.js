import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import MusaLogoImg from "../Assets/Images/musa_logo";
import { MdContentCopy } from "react-icons/md";
import { IconContext } from "react-icons";
import toast from "react-hot-toast";

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

const ShareIcon = () => {
  return (
    <IconContext.Provider value={{ size: "50px" }}>
      <div>
        <MdContentCopy />
      </div>
    </IconContext.Provider>
  );
};

const ShareButton = () => {
  return <button onClick={() => toast.success("Project copied")}>Share</button>;
};

const Navbar = () => {
  return (
    <div className="Navbar">
      <MusaLogo />
      <ShareButton />
      <GithubButton />
    </div>
  );
};

export default Navbar;
