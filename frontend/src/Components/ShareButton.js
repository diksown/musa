import "./ShareButton.css";
import { MdShare } from "react-icons/md";
import { IconContext } from "react-icons";
import toast from "react-hot-toast";

const ShareIcon = () => {
  return (
    <IconContext.Provider value={{ size: "2.5rem" }}>
      <div>
        <MdShare />
      </div>
    </IconContext.Provider>
  );
};

const ShareButton = () => {
  const handleClick = (e) => {
    e.stopPropagation();
    toast.success("Copied to clipboard!");
  };

  return (
    <button class="ShareButton" onClick={handleClick}>
      <ShareIcon />
    </button>
  );
};

export default ShareButton;
