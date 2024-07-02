import {useRef, useEffect, useState} from 'react';

import {defer} from '@shopify/remix-oxygen';
import ObrienHero from '~/components/obrien/home/Hero';

import {MEDIA_FRAGMENT} from '~/lib/fragments';

import {Await, useLoaderData, Link} from '@remix-run/react';
import {Image, Money} from '@shopify/hydrogen';

import UpgradeHalftone from '../../public/UpgradeHalftone1.png';
//import PinLogoOnly from '~/components/logos/PinLogoOnly';
import UpgradeLogo from '~/components/logos/UpgradeLogo';
import {gsap} from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
//import {Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import HomeWhatWeDo from '~/components/obrien/home/HomeWhatWeDo';
import HomeBestSellers from '~/components/obrien/home/HomeBestSellers';
import HomeActivities from '~/components/obrien/home/HomeActivities';
import PageViewViewContentPixel from '~/components/metaPixel/PageViewViewContentPixel';
// import GoogleAnalytics from '~/components/Analytics/GoogleAnalytics';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

/**
 * @type {MetaFunction<typeof loader>}
 */
export const meta = ({data}) => {
  return [
    {
      title: `${
        data?.page.seo.title ? data?.page.seo.title : data?.page.title
      } | O'Brien Watersports`,
    },
  ];
};

/**
 * @param {LoaderFunctionArgs}
 */
export async function loader({context}) {
  const {storefront} = context;

  const {page} = await context.storefront.query(PAGE_QUERY);
  const recommendedProducts = storefront.query(RECOMMENDED_PRODUCTS_QUERY);

  if (!page) {
    throw new Response('Not Found', {status: 404});
  }

  //return json({page});
  return defer({page, recommendedProducts});
}

export default function Page() {
  /** @type {LoaderReturnData} */
  const {page} = useLoaderData();
  const data = useLoaderData();

  const heroVideo = page.hero?.reference ? page.hero?.reference : null;
  const bestBanner = page.bestbanner?.reference
    ? page.bestbanner?.reference
    : null;
  const best1Image = page.best1?.reference ? page.best1?.reference : null;
  const best2Image = page.best2?.reference ? page.best2?.reference : null;
  const best3Image = page.best3?.reference ? page.best3?.reference : null;
  const best4Image = page.best4?.reference ? page.best4?.reference : null;
  const best5Image = page.best5?.reference ? page.best5?.reference : null;
  const best6Image = page.best6?.reference ? page.best6?.reference : null;
  const best7Image = page.best7?.reference ? page.best7?.reference : null;
  const best8Image = page.best8?.reference ? page.best8?.reference : null;
  const act1Image = page.act1?.reference ? page.act1?.reference : null;
  const act2Image = page.act2?.reference ? page.act2?.reference : null;
  const act3Image = page.act3?.reference ? page.act3?.reference : null;
  const act4Image = page.act4?.reference ? page.act4?.reference : null;
  const act5Image = page.act5?.reference ? page.act5?.reference : null;
  const act6Image = page.act6?.reference ? page.act6?.reference : null;

  return (
    <>
      <PageViewViewContentPixel />

      {/* <GoogleAnalytics /> */}
      <main className="home">
        {heroVideo !== null && <ObrienHero heroVideo={heroVideo} />}
        <RecommendedProducts products={data.recommendedProducts} />
        <HomeWhatWeDo bestBanner={bestBanner} />
        <HomeBestSellers
          image1={best1Image}
          image2={best2Image}
          image3={best3Image}
          image4={best4Image}
          image5={best5Image}
          image6={best6Image}
          image7={best7Image}
          image8={best8Image}
        />
        <HomeActivities
          act1Image={act1Image}
          act2Image={act2Image}
          act3Image={act3Image}
          act4Image={act4Image}
          act5Image={act5Image}
          act6Image={act6Image}
        />
      </main>
    </>
  );
}

function RecommendedProducts({products}) {
  // Gsap Controls
  let animateThis0 = useRef(null);
  let animateThis1 = useRef(null);
  let animateThis2 = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(animateThis0, {
      scrollTrigger: {
        trigger: animateThis0,
        //markers: true,
        start: '100 bottom',
        toggleClass: 'enable',
      },
      duration: 2,
    });
    gsap.to(animateThis1, {
      scrollTrigger: {
        trigger: animateThis1,
        //markers: true,
        start: '100 bottom',
        toggleClass: 'enable',
      },
      duration: 2,
    });
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

  // Slider Controls
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  return (
    <>
      <section id="new2024" className="grayBack">
        <div className="inside-xxxl">
          <header
            className="fadeIn"
            ref={(el0) => {
              animateThis0 = el0;
            }}
          >
            <div className="notWhite">
              <UpgradeLogo />
            </div>
            {/* <h2>
              Some of Our <span>Newest</span> Gear
            </h2> */}
          </header>
          <Await resolve={products}>
            {({products}) => (
              <div className="productGrid homeSlider">
                <div
                  className="fadeIn"
                  ref={(el1) => {
                    animateThis1 = el1;
                  }}
                >
                  <Slider
                    asNavFor={nav2}
                    ref={(slider) => (sliderRef1 = slider)}
                    infinite={false}
                    arrows={false}
                    fade={true}
                  >
                    {products.nodes.map((product) => (
                      <div
                        className={`homeGrid newSlick ${product?.className?.value}`}
                        key={product.id}
                      >
                        <div>
                          <div className="card-image">
                            {product.totalInventory < 1 && (
                              <div className="text-right text-notice">
                                <span className="outOfStock">Out of Stock</span>
                              </div>
                            )}
                            <Image
                              data={product.upgradeImage.reference.image}
                              sizes="(min-width: 768px) 800px, 2500px"
                            />
                            <Image
                              src={UpgradeHalftone}
                              alt="Halftone"
                              width={1378}
                              height={575}
                              className="upgradeHalftone"
                            />

                            <div className="abs">
                              <h3>{product.title}</h3>
                              <div className="always-flex">
                                <Link
                                  className="recommended-product button"
                                  to={`/products/${product.handle}`}
                                  reloadDocument
                                >
                                  <span>{product?.upgradeTitle?.value}</span>
                                </Link>
                                <Link
                                  className="recommended-product button"
                                  to={`/${product?.upgradeLink2?.value}`}
                                  reloadDocument
                                >
                                  <span>{product?.upgradeTitle2?.value}</span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
                <div
                  className="inside-sm fadeIn secondSlider"
                  ref={(el2) => {
                    animateThis2 = el2;
                  }}
                >
                  <Slider
                    asNavFor={nav1}
                    ref={(slider) => (sliderRef2 = slider)}
                    slidesToShow={1}
                    swipeToSlide={true}
                    focusOnSelect={true}
                    infinite={false}
                    className="slickSecond"
                    centerMode={true}
                  >
                    {products.nodes.map((product) => (
                      <div className="homeGridSm" key={product.id}>
                        <div>
                          <div className="card-image">
                            {product.totalInventory < 1 && (
                              <div className="text-right text-notice">
                                <span className="outOfStock">Out of Stock</span>
                              </div>
                            )}
                            <Image
                              data={product.images.nodes[0]}
                              aspectRatio="1/1"
                              sizes="(min-width: 45em) 20vw, 50vw"
                              className="upgradeImageProduct"
                            />
                          </div>
                          {/* <div className="textArea justify">
                            <h3>{product.title}</h3>
                            <div className="price">
                              <Money
                                data={product.priceRange.minVariantPrice}
                              />
                            </div>
                          </div> */}
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            )}
          </Await>
          <br />
        </div>
      </section>
    </>
  );
}

/**
 * @param {{
 *   products: Promise<RecommendedProductsQuery>;
 * }}
 */
// function RecommendedProducts({products}) {
// const responsiveSettings = [
//   {
//     breakpoint: 1200,
//     settings: {
//       slidesToShow: 4,
//       slidesToScroll: 4,
//     },
//   },
//   {
//     breakpoint: 900,
//     settings: {
//       slidesToShow: 3,
//       slidesToScroll: 3,
//     },
//   },
//   {
//     breakpoint: 600,
//     settings: {
//       slidesToShow: 2,
//       slidesToScroll: 2,
//     },
//   },
// ];
//   let animateThis1 = useRef(null);
//   let animateThis2 = useRef(null);
//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     gsap.to(animateThis1, {
//       scrollTrigger: {
//         trigger: animateThis1,
//         //markers: true,
//         start: '100 bottom',
//         toggleClass: 'enable',
//       },
//       duration: 2,
//     });
//     gsap.to(animateThis2, {
//       scrollTrigger: {
//         trigger: animateThis2,
//         //markers: true,
//         start: '100 bottom',
//         toggleClass: 'enable',
//       },
//       duration: 2,
//     });
//   });

//   return (
//     <>
//       <PageViewViewContentPixel />

//       <section id="new2024" className="grayBack">
//         <div className="inside-xxxl homeSlidePadd">
//           <header
//             className="fadeIn"
//             ref={(el1) => {
//               animateThis1 = el1;
//             }}
//           >
//             <div className="notWhite">
//               <PinLogoOnly />
//             </div>
//             <h2>
//               Some of Our <span>Newest</span> Gear
//             </h2>
//           </header>
//           <Await resolve={products}>
//             {({products}) => (
//               <div
//                 className="productGrid homeSlider fadeIn"
//                 ref={(el2) => {
//                   animateThis2 = el2;
//                 }}
//               >
//                 <Slide
//                   slidesToScroll={1}
//                   slidesToShow={1}
//                   indicators={true}
//                   responsive={responsiveSettings}
//                   autoplay={false}
//                   easing="ease"
//                 >
//                   {products.nodes.map((product) => (
//                     <div className="homeGrid" key={product.id}>
//                       <Link
//                         className="recommended-product"
//                         to={`/products/${product.handle}`}
//                         reloadDocument
//                       >
//                         <div>
//                           <div className="card-image">
//                             {product.totalInventory < 1 && (
//                               <div className="text-right text-notice">
//                                 <span className="outOfStock">Out of Stock</span>
//                               </div>
//                             )}
//                             <Image
//                               data={product.images.nodes[0]}
//                               aspectRatio="1/1"
//                               sizes="(min-width: 45em) 20vw, 50vw"
//                             />
//                           </div>
//                           <div className="textArea justify">
//                             <h3>{product.title}</h3>
//                             <div className="price">
//                               <Money
//                                 data={product.priceRange.minVariantPrice}
//                               />
//                             </div>
//                           </div>
//                         </div>
//                       </Link>
//                     </div>
//                   ))}
//                 </Slide>
//               </div>
//             )}
//           </Await>
//           <br />
//         </div>
//       </section>
//     </>
//   );
// }

const PAGE_QUERY = `#graphql
${MEDIA_FRAGMENT}
  query PageHome(
    $language: LanguageCode,
    $country: CountryCode,
  )
  @inContext(language: $language, country: $country) {
    page(handle: "home") {
      id
      title
      body
      seo {
        description
        title
      }
      hero: metafield(namespace: "custom", key: "hero_video") {
        value
        reference {
          ...Media
        }
      }
      bestbanner: metafield(namespace: "custom", key: "best_banner") {
        value
        reference {
          ...Media
        }
      }
      best1: metafield(namespace: "custom", key: "best1") {
        value
        reference {
          ...Media
        }
      }
      best2: metafield(namespace: "custom", key: "best2") {
        value
        reference {
          ...Media
        }
      }
      best3: metafield(namespace: "custom", key: "best3") {
        value
        reference {
          ...Media
        }
      }
      best4: metafield(namespace: "custom", key: "best4") {
        value
        reference {
          ...Media
        }
      }
      best5: metafield(namespace: "custom", key: "best5") {
        value
        reference {
          ...Media
        }
      }
      best6: metafield(namespace: "custom", key: "best6") {
        value
        reference {
          ...Media
        }
      }
      best7: metafield(namespace: "custom", key: "best7") {
        value
        reference {
          ...Media
        }
      }
      best8: metafield(namespace: "custom", key: "best8") {
        value
        reference {
          ...Media
        }
      }
      act1: metafield(namespace: "custom", key: "act1") {
        value
        reference {
          ...Media
        }
      }
      act2: metafield(namespace: "custom", key: "act2") {
        value
        reference {
          ...Media
        }
      }
      act3: metafield(namespace: "custom", key: "act3") {
        value
        reference {
          ...Media
        }
      }
      act4: metafield(namespace: "custom", key: "act4") {
        value
        reference {
          ...Media
        }
      }
      act5: metafield(namespace: "custom", key: "act5") {
        value
        reference {
          ...Media
        }
      }
      act6: metafield(namespace: "custom", key: "act6") {
        value
        reference {
          ...Media
        }
      }
    }
  }
`;

const RECOMMENDED_PRODUCTS_QUERY = `#graphql
  fragment RecommendedProduct on Product {
    id
    title
    handle
    totalInventory
    upgradeImage: metafield(namespace: "custom", key: "upgrade_image") {
      value
      reference {
        ... on MediaImage {
          image {
            url
            width
            height
          }
        }
      }
    }
    className: metafield(namespace: "custom", key: "classname") {
      value
    }
    upgradeTitle: metafield(namespace: "custom", key: "upgrade_title") {
      value
    }
    upgradeTitle2: metafield(namespace: "custom", key: "upgrade_title_2") {
      value
    }
    upgradeLink2: metafield(namespace: "custom", key: "upgrade_link_2") {
      value
    }
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    images(first: 1) {
      nodes {
        id
        url
        altText
        width
        height
      }
    }
  }
  query RecommendedProducts ($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    products(query: "tag:Upgrade", first: 10, sortKey: UPDATED_AT) {
      nodes {
        ...RecommendedProduct
      }
    }
  }
`;
