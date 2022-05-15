import "./NavButton.css";
import "./BackButton.css";
import { MdArrowBack } from "react-icons/md";
import { IconContext } from "react-icons";

const BackIcon = () => {
  return (
    <IconContext.Provider value={{ size: "2.5rem" }}>
      <div>
        <MdArrowBack />
      </div>
    </IconContext.Provider>
  );
};

const BackButton = ({ setProjectNumber, projectNumber }) => {
  const handleClick = (e) => {
    e.stopPropagation();
    setProjectNumber(projectNumber - 1);
  };

  return (
    <button className="BackButton NavButton" onClick={handleClick}>
      <BackIcon />
    </button>
  );
};

export default BackButton;
