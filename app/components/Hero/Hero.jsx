import {useRef, useEffect} from 'react';
import {gsap} from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import {Image} from '@shopify/hydrogen';

// import heroimg from '../../../public/HeroTest.jpg';
import {Link as SmoothLink} from 'react-scroll';

function Hero({homeHero}) {
  let backScroll = useRef(null);
  //let stickyFingaz = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(backScroll, {
      scrollTrigger: {
        trigger: '.heroContainer',
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
      <div
        className="heroContainer"
        ref={(el) => {
          backScroll = el;
        }}
      >
        <div className="hero">
          <Image data={homeHero} sizes="(min-width: 45em) 50vw, 100vw" />
        </div>
      </div>
      <div className="heroContentContainer">
        <div className="heroContent text-center">
          <h1>
            <span>EXPERIENCE THE EXCITEMENT &amp; AMPLITUDE</span>
            <span className="smol">with an Aquaglide Aquapark</span>
          </h1>
          <SmoothLink className="smoothOperator" to="next">
            See How
          </SmoothLink>
        </div>
      </div>
    </>
  );
}

export default Hero;
