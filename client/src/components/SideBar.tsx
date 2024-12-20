import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import "./portfolio.scss"; 

function SideBar() {
  const handleGithubClick = () => {
    window.open("https://github.com/karuppasamyGB", "_blank");
  };

  const handleLinkedinClick = () => {
    window.open("https://www.linkedin.com/in/karuppa-samy-g-706ba3280/", "_blank");
  };

  const handleResumeClick = () => {
    window.open("https://karuppasamy-resume-2024.tiiny.site/");
  };

  return (
    <div className="side-bar">
      <h2 onClick={handleResumeClick}>RESUME</h2>
      <div className="flex flex-col gap-7 mb-10 text-[20px]">
        <IoLogoGithub
          className="icon"
          onClick={handleGithubClick}
        />
        <IoLogoLinkedin
          className="icon"
          onClick={handleLinkedinClick}
        />
      </div>
    </div>
  );
}

export default SideBar;

