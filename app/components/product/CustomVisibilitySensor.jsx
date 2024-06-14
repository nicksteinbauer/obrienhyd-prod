import React, {useRef, useEffect, useState} from 'react';

const CustomVisibilitySensor = ({children, partialVisibility}) => {
  const sensorRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (partialVisibility) {
          setIsVisible(entry.isIntersecting || entry.intersectionRatio > 0);
        } else {
          setIsVisible(entry.isIntersecting);
        }
      },
      {
        threshold: partialVisibility ? [0, 0.5, 1] : [1],
      },
    );

    if (sensorRef.current) {
      observer.observe(sensorRef.current);
    }

    return () => {
      if (sensorRef.current) {
        observer.unobserve(sensorRef.current);
      }
    };
  }, [partialVisibility]);

  return <div ref={sensorRef}>{children({isVisible})}</div>;
};

export default CustomVisibilitySensor;
