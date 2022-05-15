import "./NavButton.css";
import "./ShareButton.css";
import { MdShare } from "react-icons/md";
import { IconContext } from "react-icons";
import toast from "react-hot-toast";
import { CopyToClipboard } from "react-copy-to-clipboard";
import findProject from "../Utils/projectShuffler";

const ShareIcon = () => {
  return (
    <IconContext.Provider value={{ size: "2.5rem" }}>
      <div>
        <MdShare />
      </div>
    </IconContext.Provider>
  );
};

const ShareButton = ({ projectNumber }) => {
  const getFormattedProject = (projectNumber) => {
    const { title, description } = findProject(projectNumber);
    const projectText = title + "\n\n" + description;
    const redirectLink = "https://musa.dikson.xyz";
    const redirectText = "Check more project ideas at " + redirectLink + "!";
    return projectText + "\n\n" + redirectText;
  };

  const textToCopy = getFormattedProject(projectNumber);

  const handleClick = (e) => {
    e.stopPropagation();
    toast.success("Copied to clipboard!");
  };

  return (
    <CopyToClipboard text={textToCopy}>
      <button className="ShareButton NavButton" onClick={handleClick}>
        <ShareIcon />
      </button>
    </CopyToClipboard>
  );
};

export default ShareButton;
