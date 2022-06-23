import "./NavButton.css";
import "./CopyButton.css";
import { MdContentCopy } from "react-icons/md";

import { IconContext } from "react-icons";
import toast from "react-hot-toast";
import { CopyToClipboard } from "react-copy-to-clipboard";
import findProject from "../Utils/projectShuffler";

const CopyIcon = () => {
  return (
    <IconContext.Provider value={{ size: "2.5rem" }}>
      <div>
        <MdContentCopy />
      </div>
    </IconContext.Provider>
  );
};

const CopyButton = ({ projectNumber }) => {
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
      <button className="CopyButton NavButton" onClick={handleClick}>
        <CopyIcon />
      </button>
    </CopyToClipboard>
  );
};

export default CopyButton;
