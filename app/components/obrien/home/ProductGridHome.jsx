import {useState, useRef, useEffect, useCallback} from 'react';
import {Link, flattenConnection} from '@shopify/hydrogen';

import {Button, ProductCard} from '~/components';
import {getImageLoadingPriority} from '~/lib/const';

import {Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import PinLogoOnly from '../obrien/PinLogoOnly';

import {gsap} from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

const responsiveSettings = [
  {
    breakpoint: 1200,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 4,
    },
  },
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

export function ProductGridHome({url, collection}) {
  const nextButtonRef = useRef(null);
  const initialProducts = collection?.products?.nodes || [];
  const {hasNextPage, endCursor} = collection?.products?.pageInfo ?? {};
  const [products, setProducts] = useState(initialProducts);
  const [cursor, setCursor] = useState(endCursor ?? '');
  const [nextPage, setNextPage] = useState(hasNextPage);
  const [pending, setPending] = useState(false);
  const haveProducts = initialProducts.length > 0;

  let animateThis1 = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(animateThis1, {
      scrollTrigger: {
        trigger: animateThis1,
        //markers: true,
        start: '100 bottom',
        toggleClass: 'enable',
      },
      duration: 2,
    });
  });

  let animateThis2 = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(animateThis2, {
      scrollTrigger: {
        trigger: animateThis2,
        //markers: true,
        start: '100 bottom',
        toggleClass: 'enable',
      },
      duration: 2,
    });
  });

  const fetchProducts = useCallback(async () => {
    setPending(true);
    const postUrl = new URL(window.location.origin + url);
    postUrl.searchParams.set('cursor', cursor);

    const response = await fetch(postUrl, {
      method: 'POST',
    });
    const {data} = await response.json();

    // ProductGrid can paginate collection, products and search routes
    // @ts-ignore TODO: Fix types
    const newProducts = flattenConnection(
      data?.collection?.products || data?.products || [],
    );
    const {endCursor, hasNextPage} = data?.collection?.products?.pageInfo ||
      data?.products?.pageInfo || {endCursor: '', hasNextPage: false};

    setProducts([...products, ...newProducts]);
    setCursor(endCursor);
    setNextPage(hasNextPage);
    setPending(false);
  }, [cursor, url, products]);

  const handleIntersect = useCallback(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          fetchProducts();
        }
      });
    },
    [fetchProducts],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersect, {
      rootMargin: '100%',
    });

    const nextButton = nextButtonRef.current;

    if (nextButton) observer.observe(nextButton);

    return () => {
      if (nextButton) observer.unobserve(nextButton);
    };
  }, [nextButtonRef, cursor, handleIntersect]);

  if (!haveProducts) {
    return (
      <div className="inside-xl padd-vert-20 backgroundGray">
        <p>No products found on this collection</p>
        <Link to="/">
          <p className="underline">Browse catalog</p>
        </Link>
      </div>
    );
  }

  return (
    <>
      <section id="new2024" className="grayBack">
        <div className="inside-xxxl homeSlidePadd">
          <header
            className="fadeIn"
            ref={(el1) => {
              animateThis1 = el1;
            }}
          >
            <div className="notWhite">
              <PinLogoOnly />
            </div>
            <h2>
              Some of Our <span>Newest</span> Gear
            </h2>
          </header>
          <div
            className="productGrid homeSlider fadeIn"
            ref={(el2) => {
              animateThis2 = el2;
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
              {products.map((product, i) => (
                <div className="homeGrid" key={product.id}>
                  <ProductCard
                    product={product}
                    loading={getImageLoadingPriority(i)}
                  />
                </div>
              ))}
            </Slide>
          </div>
        </div>
      </section>
      {nextPage && (
        <div
          className="flex items-center justify-center mt-6"
          ref={nextButtonRef}
        >
          <Button
            variant="secondary"
            disabled={pending}
            onClick={fetchProducts}
            width="full"
          >
            {pending ? 'Loading...' : 'Load more products'}
          </Button>
        </div>
      )}
    </>
  );
}
