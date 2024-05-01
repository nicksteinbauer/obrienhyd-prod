import {MediaFile} from '@shopify/hydrogen';
import {Link} from '@remix-run/react';

import {useEffect, useRef} from 'react';
import {gsap} from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

export default function BestSellerFreeboard({image8}) {
  let animateThis1 = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(animateThis1, {
      scrollTrigger: {
        trigger: animateThis1,
        //markers: true,
        start: '100 bottom',
        end: 'end -100%',
        toggleClass: 'enable',
      },
      duration: 2,
    });
  });

  return (
    <div
      className="bestSeller fadeIn"
      ref={(el1) => {
        animateThis1 = el1;
      }}
    >
      <MediaFile
        data={image8}
        className="test"
        sizes="(max-width: 768px) 100vw, 800px"
      />
      <div className="white-back text-center">
        <h3>Freeboard</h3>
        <div className="links">
          <Link reloadDocument={true} to="/products/obrien-freeboard-v2">
            View Freeboard
          </Link>
        </div>
      </div>
    </div>
  );
}
