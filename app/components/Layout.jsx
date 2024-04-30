import {Suspense, useRef, useEffect} from 'react';
import {Await} from '@remix-run/react';

// import loadScript from '@shopify/hydrogen';
import ObrienFooter from './obrien/Footer';
import {Header} from '~/components/Header';
import {Aside} from '~/components/Aside';
import {CartMain} from '~/components/Cart';
import {gsap} from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

/**
 * @param {LayoutProps}
 */
export function Layout({cart, children = null, footer, header, isLoggedIn}) {
  let animateThis1 = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(animateThis1, {
      scrollTrigger: {
        trigger: animateThis1,
        start: 'top+=44px top',
        //end: 'bottom bottom',
        toggleClass: 'headerActive',
      },
      //duration: 2,
    });
  }, []);
  // loadScript(
  //   // eslint-disable-next-line no-template-curly-in-string
  //   '//static.klaviyo.com/onsite/js/klaviyo.js?company_id=${WkytYu}',
  // ).catch(() => {});
  return (
    <>
      <CartAside cart={cart} />

      <div
        ref={(el) => {
          animateThis1 = el;
        }}
      >
        <div className="flex flex-col min-h-screen">
          <div className="">
            <a href="#mainContent" className="sr-only">
              Skip to content
            </a>
          </div>
          <Suspense>
            <Header />
          </Suspense>
          <main id="mainContent">{children}</main>
        </div>
        <Suspense>
          <ObrienFooter />
        </Suspense>
      </div>
    </>
  );
}

/**
 * @param {{cart: LayoutProps['cart']}}
 */
function CartAside({cart}) {
  return (
    <Aside id="cart-aside" heading="CART">
      <Suspense fallback={<p>Loading cart ...</p>}>
        <Await resolve={cart}>
          {(cart) => {
            return <CartMain cart={cart} layout="aside" />;
          }}
        </Await>
      </Suspense>
    </Aside>
  );
}
