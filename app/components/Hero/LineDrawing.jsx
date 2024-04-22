import React, {useEffect} from 'react';
import gsap from 'gsap';
import {DrawSVGPlugin} from 'gsap/dist/DrawSVGPlugin';
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';

// this isn't working because i need to pay for DrawSVG... on hold
gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

function LineDrawing() {
  useEffect(() => {
    const drawLine = gsap.timeline();

    ScrollTrigger.create({
      trigger: '.line-container',
      animation: drawLine,
      start: 'top 80%',
      end: 'bottom 20%',
      scrub: true,
    });
    drawLine.fromTo('.line', {drawSVG: '0'}, {duration: 1, drawSVG: '100%'});
  }, []);

  return (
    <div className="line-container">
      <svg width="500" height="500" viewBox="0 0 500 500">
        <path
          className="line"
          d="M100,100 L400,400"
          fill="none"
          stroke="black"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}

export default LineDrawing;
