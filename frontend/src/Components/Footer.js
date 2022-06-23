import "./Footer.css";
import { MdFlag } from "react-icons/md";
import { FaGithub, FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="Footer">
      <div>
        <a href="https://github.com/diksown/musa">
          GitHub
          <FaGithub
            size={18}
            style={{ verticalAlign: "bottom", marginLeft: "3px" }}
          />
        </a>{" "}
        ·{" "}
        <a
          href="https://github.com/diksown/musa/blob/main/docs/REPORTING.md"
          target="_blank"
          rel="noreferrer"
        >
          <span className="Report">
            Report
            <MdFlag size={20} style={{ verticalAlign: "bottom" }} />
          </span>
        </a>{" "}
      </div>
      <div>
        Made with <FaHeart size={18} style={{ verticalAlign: "bottom" }} /> by{" "}
        <a
          class="GithubProfile"
          href="https://github.com/diksown"
          target="_blank"
          rel="noreferrer"
        >
          @diksown
        </a>{" "}
      </div>
    </div>
  );
};

export default Footer;
