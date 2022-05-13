import "./ShareButton.css";
import { MdShare } from "react-icons/md";
import { IconContext } from "react-icons";
import toast from "react-hot-toast";

const ShareIcon = () => {
  return (
    <IconContext.Provider value={{ size: "40px" }}>
      <div>
        <MdShare />
      </div>
    </IconContext.Provider>
  );
};

const ShareButton = () => {
  return (
    <button class="ShareButton" onClick={() => toast.success("Project copied")}>
      <ShareIcon />
    </button>
  );
};

export default ShareButton;
