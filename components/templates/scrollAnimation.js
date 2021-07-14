import React, { useEffect, useRef } from 'react';
import scrollReveal from 'scrollreveal';

const ScrollAnimation = ({ children, move }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current)
      scrollReveal().reveal(sectionRef.current, {
        reset: true,
        delay: 400,
        opacity: 0,
        origin:
          move === 'left'
            ? 'left'
            : move === 'right'
            ? 'right'
            : move === 'top'
            ? 'top'
            : 'bottom',
        distance: '40px',
      });
  }, [sectionRef]);
  return <main ref={sectionRef}>{children}</main>;
};

export default ScrollAnimation;
