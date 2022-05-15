import "./BackButton.css";
import { MdArrowBack } from "react-icons/md";
import { IconContext } from "react-icons";
import "./NavButton.css";

const BackIcon = () => {
  return (
    <IconContext.Provider value={{ size: "2.5rem" }}>
      <div>
        <MdArrowBack />
      </div>
    </IconContext.Provider>
  );
};

const BackButton = () => {
  const handleClick = (e) => {
    e.stopPropagation();
    window.history.back();
  };
  return (
    <button className="BackButton NavButton" onClick={handleClick}>
      <BackIcon />
    </button>
  );
};

export default BackButton;
