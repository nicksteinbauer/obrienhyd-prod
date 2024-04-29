import {Image} from '@shopify/hydrogen';

import {useRef, useEffect} from 'react';
import {gsap} from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

export function BannerImageCollection({myImage}) {
  let animateThis1 = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(animateThis1, {
      scrollTrigger: {
        trigger: '.singleHeader2024',
        start: 'top top',
        scrub: 1,
      },
      duration: 2,
      x: '0',
      y: '160',
      ease: 'linear',
    });
  }, []);

  return (
    <>
      {myImage && (
        <div
          className="collectionImage singleHeader2024"
          ref={(el) => {
            animateThis1 = el;
          }}
        >
          <Image data={myImage} sizes="(max-width: 1024px) 100vw, 2500px" />
        </div>
      )}
    </>
  );
}
