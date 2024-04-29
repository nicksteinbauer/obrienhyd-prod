import {Image} from '@shopify/hydrogen';

import {useRef, useEffect} from 'react';
import {gsap} from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

export function FeatureFocus({
  ffImage1,
  ffTitle1,
  ffDescription1,
  ffImage2,
  ffTitle2,
  ffDescription2,
}) {
  let animateThis1 = useRef(null);
  //let animateThat1 = useRef(null);
  let animateThis2 = useRef(null);
  //let animateThat2 = useRef(null);
  // let animateThis3 = useRef(null);
  // let animateThat3 = useRef(null);
  // let animateThis4 = useRef(null);
  // let animateThat4 = useRef(null);
  // let animateThis5 = useRef(null);
  // let animateThat5 = useRef(null);
  // let animateThis6 = useRef(null);
  // let animateThat6 = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(animateThis1, {
      scrollTrigger: {
        trigger: animateThis1,
        scrub: 1,
      },
      duration: 2,
      x: '-20',
      y: '60',
      ease: 'ease-in',
    });
    // gsap.from(animateThat1, {
    //   scrollTrigger: {
    //     trigger: animateThat1,
    //     markers: true,
    //     toggleActions: 'restart none none reverse',
    //   },
    //   duration: 1.5,
    //   opacity: 0,
    //   ease: 'ease-in',
    // });

    gsap.to(animateThis2, {
      scrollTrigger: {
        trigger: animateThis2,
        scrub: 1,
      },
      duration: 2,
      x: '20',
      y: '60',
      ease: 'ease-in',
    });
    // gsap.from(animateThat2, {
    //   scrollTrigger: {
    //     trigger: animateThat2,
    //     toggleActions: 'restart none none reverse',
    //   },
    //   duration: 1.5,
    //   opacity: 0,
    //   ease: 'ease-in',
    // });

    // gsap.to(animateThis3, {
    //   scrollTrigger: {
    //     trigger: '.feature3',
    //     scrub: 1,
    //   },
    //   duration: 2,
    //   x: '-20',
    //   y: '60',
    //   ease: 'ease-in',
    // });
    // gsap.from(animateThat3, {
    //   scrollTrigger: {
    //     trigger: '.feature3',
    //     //start: "top bottom",
    //     toggleActions: 'restart none none reverse',
    //   },
    //   duration: 1.5,
    //   opacity: 0,
    //   ease: 'ease-in',
    // });

    // gsap.to(animateThis4, {
    //   scrollTrigger: {
    //     trigger: '.feature4',
    //     scrub: 1,
    //   },
    //   duration: 2,
    //   x: '20',
    //   y: '60',
    //   ease: 'ease-in',
    // });
    // gsap.from(animateThat4, {
    //   scrollTrigger: {
    //     trigger: '.feature4',
    //     //start: "top bottom",
    //     toggleActions: 'restart none none reverse',
    //   },
    //   duration: 1.5,
    //   opacity: 0,
    //   ease: 'ease-in',
    // });

    // gsap.to(animateThis5, {
    //   scrollTrigger: {
    //     trigger: '.feature5',
    //     scrub: 1,
    //   },
    //   duration: 2,
    //   x: '-20',
    //   y: '60',
    //   ease: 'ease-in',
    // });
    // gsap.from(animateThat5, {
    //   scrollTrigger: {
    //     trigger: '.feature5',
    //     //start: "top bottom",
    //     toggleActions: 'restart none none reverse',
    //   },
    //   duration: 1.5,
    //   opacity: 0,
    //   ease: 'ease-in',
    // });

    // gsap.to(animateThis6, {
    //   scrollTrigger: {
    //     trigger: '.feature6',
    //     scrub: 1,
    //   },
    //   duration: 2,
    //   x: '20',
    //   y: '60',
    //   ease: 'ease-in',
    // });
    // gsap.from(animateThat6, {
    //   scrollTrigger: {
    //     trigger: '.feature6',
    //     //start: "top bottom",
    //     toggleActions: 'restart none none reverse',
    //   },
    //   duration: 1.5,
    //   opacity: 0,
    //   ease: 'ease-in',
    // });
  }, []);

  return (
    <div className="feature-focus">
      <div className="white-background">
        <div className="inside-xxl">
          {ffImage1 ? (
            <div className="flex-md feature1">
              <div
                className="sixty"
                ref={(el) => {
                  animateThis1 = el;
                }}
              >
                <div className="animateBackground">
                  <div
                    className="animateThat"
                    // ref={(el) => {
                    //   animateThat1 = el;
                    // }}
                  >
                    <Image data={ffImage1} />
                  </div>
                </div>
              </div>
              <div className="forty flex-vertical">
                <div>
                  <div className="title-container">
                    <h2>{ffTitle1}</h2>
                  </div>
                  <div className="feature-content">{ffDescription1}</div>
                </div>
              </div>
            </div>
          ) : null}

          {ffImage2 ? (
            <div className="flex-md feature2">
              <div
                className="sixty"
                ref={(el) => {
                  animateThis2 = el;
                }}
              >
                <div className="animateBackground">
                  <div
                    className="animateThat"
                    // ref={(el) => {
                    //   animateThat2 = el;
                    // }}
                  >
                    <Image data={ffImage2} />
                  </div>
                </div>
              </div>
              <div className="forty flex-vertical">
                <div>
                  <div className="title-container">
                    <h2>{ffTitle2}</h2>
                  </div>
                  <div className="feature-content">{ffDescription2}</div>
                </div>
              </div>
            </div>
          ) : null}

          {/* {ffImage3 ? (
            <div className="flex-md feature3">
              <div
                className="sixty"
                ref={(el) => {
                  //@ts-ignore
                  animateThis3 = el;
                }}
              >
                <div className="animateBackground">
                  <div
                    className="animateThat"
                    ref={(el) => {
                      //@ts-ignore
                      animateThat3 = el;
                    }}
                  >
                    {ffImage3}
                  </div>
                </div>
              </div>
              <div className="forty flex-vertical">
                <div>
                  <div className="title-container">{obFFTitle3}</div>
                  <div className="feature-content">{obFFContent3}</div>
                  {links3}
                </div>
              </div>
            </div>
          ) : null}

          {ffImage4 ? (
            <div className="flex-md feature4">
              <div
                className="sixty"
                ref={(el) => {
                  //@ts-ignore
                  animateThis4 = el;
                }}
              >
                <div className="animateBackground">
                  <div
                    className="animateThat"
                    ref={(el) => {
                      //@ts-ignore
                      animateThat4 = el;
                    }}
                  >
                    {ffImage4}
                  </div>
                </div>
              </div>
              <div className="forty flex-vertical">
                <div>
                  <div className="title-container">{obFFTitle4}</div>
                  <div className="feature-content">{obFFContent4}</div>
                  {links4}
                </div>
              </div>
            </div>
          ) : null}

          {ffImage5 ? (
            <div className="flex-md feature5">
              <div
                className="sixty"
                ref={(el) => {
                  //@ts-ignore
                  animateThis5 = el;
                }}
              >
                <div className="animateBackground">
                  <div
                    className="animateThat"
                    ref={(el) => {
                      //@ts-ignore
                      animateThat5 = el;
                    }}
                  >
                    {ffImage5}
                  </div>
                </div>
              </div>
              <div className="forty flex-vertical">
                <div>
                  <div className="title-container">{obFFTitle5}</div>
                  <div className="feature-content">{obFFContent5}</div>
                  {links5}
                </div>
              </div>
            </div>
          ) : null}

          {ffImage6 ? (
            <div className="flex-md feature6">
              <div
                className="sixty"
                ref={(el) => {
                  //@ts-ignore
                  animateThis6 = el;
                }}
              >
                <div className="animateBackground">
                  <div
                    className="animateThat"
                    ref={(el) => {
                      //@ts-ignore
                      animateThat6 = el;
                    }}
                  >
                    {ffImage6}
                  </div>
                </div>
              </div>
              <div className="forty flex-vertical">
                <div>
                  <div className="title-container">{obFFTitle6}</div>
                  <div className="feature-content">{obFFContent6}</div>
                  {links6}
                </div>
              </div>
            </div>
          ) : null} */}
        </div>
      </div>
    </div>
  );
}
