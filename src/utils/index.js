
import React, {useState, useEffect} from 'react';

export const useScrollToTop = (initialScrollState = false) => {
  const [scrollToTop, setScrollToTop] = useState(initialScrollState);

  useEffect(() => {
    const updateButtonTop = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        document.getElementById('btn-top').style.display = 'block';
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        document.getElementById('btn-top').style.display = 'none';
      }
    };

    if (scrollToTop) {
      setScrollToTop(false);
      try {
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
      } catch (error) {
        window.scrollTo(0, 0);
      }
    }

    window.addEventListener("scroll", updateButtonTop);

    return function cleanup() {
      document.body.classList.remove("profile-page");
      window.removeEventListener("scroll", updateButtonTop);
    };
  }, [scrollToTop, setScrollToTop]);

  return setScrollToTop;
};