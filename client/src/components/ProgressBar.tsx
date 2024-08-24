import { useEffect, useState } from "react";
import './portfolio.scss';

function ProgressBar() {
  const [scrollTop, setScrollTop] = useState<number>(0);

  useEffect(() => {
    const onScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollTop(scrolled);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="progress-bar-container">
      <div
        className="progress-bar-fill"
        style={{ height: `${scrollTop}%` }}
      ></div>
    </div>
  );
}

export default ProgressBar;
