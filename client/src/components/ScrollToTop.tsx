import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import './portfolio.scss'; 

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  return (
    <div className={`scroll-to-top ${visible ? 'visible' : ''}`}>
      <FaArrowUp onClick={scrollToTop} />
    </div>
  );
}

export default ScrollToTop;
