import {MediaFile} from '@shopify/hydrogen';
import WhiteStackedLogo from '~/components/logos/WhiteStackedLogo';
import {useRef, useEffect} from 'react';
import {gsap} from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

//import {Link} from '@shopify/hydrogen';

export default function HomeWhatWeDo({bestBanner}) {
  let backScroll = useRef(null);
  //let stickyFingaz = useRef(null);
  let animateThis1 = useRef(null);
  let animateThis2 = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(backScroll, {
      scrollTrigger: {
        trigger: '.imgContain',
        start: '100 bottom',
        scrub: 1,
      },
      duration: 2,
      x: '0',
      y: '200',
      ease: 'linear',
    });
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
    gsap.to(animateThis2, {
      scrollTrigger: {
        trigger: animateThis2,
        //markers: true,
        start: '100 bottom',
        end: 'end -100%',
        toggleClass: 'enable',
      },
      duration: 2,
    });
  }, []);

  return (
    <section id="about" className="imgContain">
      <div
        className="aboutImg"
        ref={(el) => {
          backScroll = el;
        }}
      >
        <MediaFile
          data={bestBanner}
          className="test"
          controls={false}
          autoPlay
          muted
          loop
          playsInline
          sizes="(max-width: 1024px) 100vw, 2500px"
        />
      </div>
      <div className="aboutOverlay flex-vertical text-center">
        <header>
          <div
            className="inside-xs fadeIn whiteLogoTest"
            ref={(el1) => {
              animateThis1 = el1;
            }}
          >
            <WhiteStackedLogo />
          </div>
          <div
            className="together fadeIn"
            ref={(el2) => {
              animateThis2 = el2;
            }}
          >
            <h1 className="inside-sm">
              Creating <span>the best</span> Experiences on the Water
            </h1>
            <p className="inside-sm">
              For over 50 years, O&apos;Brien has been creating products
              specifically for the ultimate family fun on the water. We work
              hard to design, test, manufacture and improve every product we
              make so your water time will make memories that last a lifetime.
            </p>
          </div>
        </header>
        <div className="gradientOverlay"></div>
      </div>
    </section>
  );
}
