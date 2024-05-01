import PinLogoOnly from '~/components/logos/PinLogoOnly';
import {useRef, useEffect} from 'react';
import {gsap} from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

import {Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import ActivitiesWakeboarding from './activities/Wakeboarding';
import ActivitiesWakesurfing from './activities/Wakesurfing';
import ActivitiesSup from './activities/Sup';
import ActivitiesKneeboarding from './activities/Kneeboarding';
import ActivitiesMargaritaville from './activities/Margaritaville';
import ActivitiesWaterskiing from './activities/Waterskiing';

const responsiveSettings = [
  {
    breakpoint: 900,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
    },
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
    },
  },
];

export default function HomeActivities({
  act1Image,
  act2Image,
  act3Image,
  act4Image,
  act5Image,
  act6Image,
}) {
  let animateThis20 = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(animateThis20, {
      scrollTrigger: {
        trigger: animateThis20,
        //markers: true,
        start: '100 bottom',
        end: '1200 top',
        toggleClass: 'enable',
      },
      duration: 2,
    });
  });
  let animateThis5 = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(animateThis5, {
      scrollTrigger: {
        trigger: animateThis5,
        //markers: true,
        start: '300 bottom',
        end: '500 top',
        toggleClass: 'enable',
      },
      duration: 2,
    });
  });

  return (
    <section id="activities" className="grayBack">
      <div className="inside-sm homeSlidePadd">
        <header
          className="fadeIn aLittlePadd"
          ref={(el5) => {
            animateThis5 = el5;
          }}
        >
          <div className="notWhite">
            <PinLogoOnly />
          </div>
          <h2>
            Putting the <span>Sports</span> in Watersports
          </h2>
          <p>
            In 1964 we built our first Waterski, Our passion for watersports has
            revolutionized the industry not only with waterskis, but wakeboards,
            wakesurf boards, stand up paddleboards, tubes, and life jackets as
            well.
          </p>
        </header>
      </div>
      <div className="homeSlidePadd">
        <div
          className="productGrid homeSlider fadeIn noPaddTop"
          ref={(el20) => {
            animateThis20 = el20;
          }}
        >
          <Slide
            slidesToScroll={1}
            slidesToShow={1}
            indicators={true}
            responsive={responsiveSettings}
            autoplay={false}
            easing="ease"
          >
            <ActivitiesWakeboarding act1Image={act1Image} />
            <ActivitiesWakesurfing act2Image={act2Image} />
            <ActivitiesSup act3Image={act3Image} />
            <ActivitiesKneeboarding act4Image={act4Image} />
            <ActivitiesMargaritaville act5Image={act5Image} />
            <ActivitiesWaterskiing act6Image={act6Image} />
          </Slide>
        </div>
      </div>
    </section>
  );
}
