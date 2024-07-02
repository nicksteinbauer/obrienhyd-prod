import {Suspense, useState, useEffect} from 'react';
import {defer, redirect} from '@shopify/remix-oxygen';
import {Await, Link, useLoaderData} from '@remix-run/react';
import {
  Image,
  Money,
  VariantSelector,
  getSelectedProductOptions,
  CartForm,
} from '@shopify/hydrogen';
import {getVariantUrl} from '~/lib/variants';

import BannerImage from '~/components/obrien/meta/BannerImage';
import TabbedContainer from '~/components/product/TabbedContainer';

import {Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import Dinp from '~/components/prop65/Dinp';
import Dnhp from '~/components/prop65/Dnhp';
import VideoContainer from '~/components/video/VideoContainer.jsx';
//import Locator from '~/components/locator/Locator';
import StockNotification from '~/components/klaviyo/StockNotification';
import {
  trackViewedProduct,
  trackAddedToCart,
} from '~/components/klaviyo/Onsite';
import {Link as ScrollLink} from 'react-scroll';

import {Button} from 'react-bootstrap';
import PageViewViewContentPixel from '~/components/metaPixel/PageViewViewContentPixel';

/**
 * @type {MetaFunction<typeof loader>}
 */

export const meta = ({data}) => {
  return [
    {
      title: `${
        data?.product.seo.title ? data?.product.seo.title : data?.product.title
      } | O'Brien Watersports`,
    },
  ];
};

/**
 * @param {LoaderFunctionArgs}
 */
export async function loader({params, request, context}) {
  const {handle} = params;
  const {storefront} = context;

  const selectedOptions = getSelectedProductOptions(request).filter(
    (option) =>
      // Filter out Shopify predictive search query params
      !option.name.startsWith('_sid') &&
      !option.name.startsWith('_pos') &&
      !option.name.startsWith('_psq') &&
      !option.name.startsWith('_ss') &&
      !option.name.startsWith('_v') &&
      // Filter out third party tracking params
      !option.name.startsWith('fbclid'),
  );

  if (!handle) {
    throw new Error('Expected product handle to be defined');
  }

  // await the query for the critical product data
  const {product} = await storefront.query(PRODUCT_QUERY, {
    variables: {handle, selectedOptions},
  });

  if (!product?.id) {
    throw new Response(null, {status: 404});
  }

  const firstVariant = product.variants.nodes[0];
  const firstVariantIsDefault = Boolean(
    firstVariant.selectedOptions.find(
      (option) => option.name === 'Title' && option.value === 'Default Title',
    ),
  );

  if (firstVariantIsDefault) {
    product.selectedVariant = firstVariant;
  } else {
    // if no selected variant was returned from the selected options,
    // we redirect to the first variant's url with it's selected options applied
    if (!product.selectedVariant) {
      throw redirectToFirstVariant({product, request});
    }
  }

  // In order to show which variants are available in the UI, we need to query
  // all of them. But there might be a *lot*, so instead separate the variants
  // into it's own separate query that is deferred. So there's a brief moment
  // where variant options might show as available when they're not, but after
  // this deffered query resolves, the UI will update.
  const variants = storefront.query(VARIANTS_QUERY, {
    variables: {handle},
  });

  return defer({product, variants});
}

/**
 * @param {{
 *   product: ProductFragment;
 *   request: Request;
 * }}
 */
function redirectToFirstVariant({product, request}) {
  const url = new URL(request.url);
  const firstVariant = product.variants.nodes[0];

  return redirect(
    getVariantUrl({
      pathname: url.pathname,
      handle: product.handle,
      selectedOptions: firstVariant.selectedOptions,
      searchParams: new URLSearchParams(url.search),
    }),
    {
      status: 302,
    },
  );
}

export default function Product() {
  /** @type {LoaderReturnData} */
  const {product, variants} = useLoaderData();
  const {
    selectedVariant,
    metafieldbanner,
    metamaindescription,
    metatab2,
    metaPerformancetitle1,
    metaperformanceanimation1,
    metaPerformancetitle2,
    metaperformanceanimation2,
    metaPerformancetitle3,
    metaperformanceanimation3,
    metaPerformancetitle4,
    metaperformanceanimation4,
    metaPerformancetitle5,
    metaperformanceanimation5,
    metaperformanceimage1,
    metaperformanceimage1title,
    metaperformance1description,
    metaperformanceimage2,
    metaperformanceimage2title,
    metaperformancetitlebottom,
    productvideo,
    productvideo2,
    videoimage,
    // id,
    // productType,
    dinp,
    dnhp,
  } = product;

  const bannerImage = metafieldbanner?.reference?.image
    ? metafieldbanner?.reference?.image
    : null;
  const metaMainDescription = metamaindescription?.value
    ? metamaindescription?.value
    : null;

  const metaTab2 = metatab2?.value ? metatab2?.value : null;
  const metaPerformanceTitle1 = metaPerformancetitle1?.value
    ? metaPerformancetitle1?.value
    : null;
  const metaPerformanceAnimation1 = metaperformanceanimation1?.value
    ? metaperformanceanimation1?.value
    : null;
  const metaPerformanceTitle2 = metaPerformancetitle2?.value
    ? metaPerformancetitle2?.value
    : null;
  const metaPerformanceAnimation2 = metaperformanceanimation2?.value
    ? metaperformanceanimation2?.value
    : null;
  const metaPerformanceTitle3 = metaPerformancetitle3?.value
    ? metaPerformancetitle3?.value
    : null;
  const metaPerformanceAnimation3 = metaperformanceanimation3?.value
    ? metaperformanceanimation3?.value
    : null;
  const metaPerformanceTitle4 = metaPerformancetitle4?.value
    ? metaPerformancetitle4?.value
    : null;
  const metaPerformanceAnimation4 = metaperformanceanimation4?.value
    ? metaperformanceanimation4?.value
    : null;
  const metaPerformanceTitle5 = metaPerformancetitle5?.value
    ? metaPerformancetitle5?.value
    : null;
  const metaPerformanceAnimation5 = metaperformanceanimation5?.value
    ? metaperformanceanimation5?.value
    : null;
  const metaPerformanceImage1 = metaperformanceimage1?.reference?.image
    ? metaperformanceimage1?.reference?.image
    : null;
  const metaPerformanceImage1Title = metaperformanceimage1title?.value
    ? metaperformanceimage1title?.value
    : null;
  const metaPerformance1Description = metaperformance1description?.value
    ? metaperformance1description?.value
    : null;
  const metaPerformanceImage2 = metaperformanceimage2?.reference?.image
    ? metaperformanceimage2?.reference?.image
    : null;
  const metaPerformanceImage2Title = metaperformanceimage2title?.value
    ? metaperformanceimage2title?.value
    : null;
  const metaPerformanceTitleBottom = metaperformancetitlebottom?.value
    ? metaperformancetitlebottom?.value
    : null;
  const productVideo = productvideo?.value ? productvideo?.value : null;
  const productVideo2 = productvideo2?.value ? productvideo2.value : null;
  const videoImage = videoimage?.reference?.image
    ? videoimage?.reference?.image
    : null;
  const dinpMod = dinp?.value ? dinp?.value : null;
  const dnhpMod = dnhp?.value ? dnhp.value : null;

  // Klaviyo trackedViewedProduct
  useEffect(() => {
    trackViewedProduct(product);
  });

  return (
    <>
      <PageViewViewContentPixel />
      {bannerImage !== null && (
        <div className="bannerFix">
          <BannerImage myImage={bannerImage} />
        </div>
      )}
      <section
        className={`inside-xl buyBox banner ${
          bannerImage === null && 'noBanner'
        }`}
      >
        <div
          className={`${
            metaMainDescription === null
              ? 'flex-md itsNotHere'
              : 'flex-md itsHere'
          }`}
        >
          <div className="seventy obrienGallery">
            <ProductImages productimages={product.images} />
          </div>
          <ProductMain
            selectedVariant={selectedVariant}
            product={product}
            variants={variants}
          />
        </div>
      </section>
      {dinpMod !== null && (
        <div className="inside-lg">
          <Dinp />
        </div>
      )}
      {dnhpMod !== null && (
        <div className="inside-lg">
          <Dnhp />
        </div>
      )}
      {productVideo !== null && (
        <section id="video">
          <VideoContainer
            productVideo={productVideo}
            productVideo2={productVideo2}
            videoImage={videoImage}
          />
        </section>
      )}
      {metaMainDescription !== null && (
        <section id="tabs">
          <TabbedContainer
            metaMainDescription={metaMainDescription}
            metaTab2={metaTab2}
            metaPerformanceTitle1={metaPerformanceTitle1}
            metaPerformanceAnimation1={metaPerformanceAnimation1}
            metaPerformanceTitle2={metaPerformanceTitle2}
            metaPerformanceAnimation2={metaPerformanceAnimation2}
            metaPerformanceTitle3={metaPerformanceTitle3}
            metaPerformanceAnimation3={metaPerformanceAnimation3}
            metaPerformanceTitle4={metaPerformanceTitle4}
            metaPerformanceAnimation4={metaPerformanceAnimation4}
            metaPerformanceTitle5={metaPerformanceTitle5}
            metaPerformanceAnimation5={metaPerformanceAnimation5}
            metaPerformanceImage1={metaPerformanceImage1}
            metaPerformanceImage1Title={metaPerformanceImage1Title}
            metaPerformance1Description={metaPerformance1Description}
            metaPerformanceImage2={metaPerformanceImage2}
            metaPerformanceImage2Title={metaPerformanceImage2Title}
            metaPerformanceTitleBottom={metaPerformanceTitleBottom}
          />
        </section>
      )}
      <Suspense>
        <Locator />
      </Suspense>
    </>
  );
}

/**
 @param {{
  *   product: ProductFragment;
  * }}
 */
function ProductImages({productimages}) {
  if (!productimages) {
    return <div className="product-image" />;
  }
  return (
    <div className="product-image">
      <Slide indicators={true} autoplay={false} transitionDuration={500}>
        {productimages.nodes.map((image, index) => (
          <Image
            alt={image.altText || `Image ${index + 1}`}
            aspectRatio="1/1"
            data={image}
            key={image.id}
            sizes="(min-width: 45em) 50vw, 100vw"
          />
        ))}
      </Slide>
    </div>
  );
}

// /**
//  * @param {{image: ProductVariantFragment['image']}}
//  */
// function ProductImage({image}) {
//   if (!image) {
//     return <div className="product-image" />;
//   }
//   return (
//     <div className="product-image">
//       <Image
//         alt={image.altText || 'Product Image'}
//         aspectRatio="1/1"
//         data={image}
//         key={image.id}
//         sizes="(min-width: 45em) 50vw, 100vw"
//       />
//     </div>
//   );
// }

/**
 * @param {{
 *   product: ProductFragment;
 *   selectedVariant: ProductFragment['selectedVariant'];
 *   variants: Promise<ProductVariantsQuery>;
 * }}
 */
function ProductMain({selectedVariant, product, variants}) {
  const {title, descriptionHtml} = product;

  return (
    <div className="thirty contentBoxContainer flex-vertical">
      <section className="contentBox">
        <h1 className="padding">{title}</h1>
        <div className="priceFix padding">
          <Suspense
            fallback={
              <ProductForm
                product={product}
                selectedVariant={selectedVariant}
                variants={[]}
              />
            }
          >
            <Await
              errorElement="There was a problem loading product variants"
              resolve={variants}
            >
              {(data) => (
                <ProductForm
                  product={product}
                  selectedVariant={selectedVariant}
                  variants={data.product?.variants.nodes || []}
                />
              )}
            </Await>
          </Suspense>
          <div className="fixySize">
            <div
              className="buyBoxHTML"
              dangerouslySetInnerHTML={{__html: descriptionHtml}}
            />
            <ScrollLink className="linky" to="tabs">
              Read More
            </ScrollLink>
          </div>
        </div>
      </section>
    </div>
  );
}

/**
 * @param {{
 *   selectedVariant: ProductFragment['selectedVariant'];
 * }}
 */
function ProductPrice({selectedVariant}) {
  return (
    <>
      {selectedVariant?.compareAtPrice ? (
        <>
          <div className="product-price-on-sale">
            {selectedVariant ? (
              <h3 className="buyBoxPrice">
                <Money data={selectedVariant.price} />
              </h3>
            ) : null}
            <s className="opacity-50 strike">
              <Money data={selectedVariant.compareAtPrice} />
            </s>
          </div>
        </>
      ) : (
        selectedVariant?.price && (
          <h3 className="buyBoxPrice">
            <Money data={selectedVariant?.price} />
          </h3>
        )
      )}
    </>
  );
}

/**
 * @param {{
 *   product: ProductFragment;
 *   selectedVariant: ProductFragment['selectedVariant'];
 *   variants: Array<ProductVariantFragment>;
 * }}
 */
function ProductForm({product, selectedVariant, variants}) {
  const handleAtc = function () {
    trackAddedToCart(product);
  };
  return (
    <div className="buyBoxForm">
      <ProductPrice selectedVariant={selectedVariant} />
      <div className="buyBoxFooter">
        <VariantSelector
          handle={product.handle}
          options={product.options}
          variants={variants}
        >
          {({option}) => <ProductOptions key={option.name} option={option} />}
        </VariantSelector>
        {!selectedVariant.availableForSale ? (
          <StockNotification selectedVariant={selectedVariant} />
        ) : (
          <AddToCartButton
            disabled={!selectedVariant || !selectedVariant.availableForSale}
            onClick={() => {
              handleAtc();
              window.location.href = window.location.href + '#cart-aside';
            }}
            lines={
              selectedVariant
                ? [
                    {
                      merchandiseId: selectedVariant.id,
                      quantity: 1,
                    },
                  ]
                : []
            }
          >
            {selectedVariant?.availableForSale ? 'Add to bag' : 'Sold out'}
          </AddToCartButton>
        )}
      </div>
    </div>
  );
}

/**
 * @param {{option: VariantOption}}
 */
function ProductOptions({option}) {
  return (
    <div className="productOptions" key={option.name}>
      <h4>{option.name}</h4>
      <div className="product-options-grid">
        {option.values.map(({value, isAvailable, isActive, to}) => {
          return (
            <Link
              className="product-options-item"
              key={option.name + value}
              prefetch="intent"
              preventScrollReset
              replace
              to={to}
              style={{
                border: isActive ? '1px solid #333' : '1px solid transparent',
                background: isActive ? '#acacac' : '#efefef',
                color: isActive ? '#fff' : '#333',
                opacity: isAvailable ? 1 : 0.3,
              }}
            >
              {value}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

/**
 * @param {{
 *   analytics?: unknown;
 *   children: React.ReactNode;
 *   disabled?: boolean;
 *   lines: CartLineInput[];
 *   onClick?: () => void;
 * }}
 */
function AddToCartButton({analytics, children, disabled, lines, onClick}) {
  return (
    <CartForm route="/cart" inputs={{lines}} action={CartForm.ACTIONS.LinesAdd}>
      {(fetcher) => (
        <>
          <input
            name="analytics"
            type="hidden"
            value={JSON.stringify(analytics)}
          />
          <button
            className="checkoutButton addToCart"
            type="submit"
            onClick={onClick}
            disabled={disabled ?? fetcher.state !== 'idle'}
          >
            {children}
          </button>
        </>
      )}
    </CartForm>
  );
}

function Locator() {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  useEffect(() => {
    // Load Google Maps API script
    const googleMapsScript = document.createElement('script');
    googleMapsScript.type = 'text/javascript';
    googleMapsScript.src =
      '//maps.googleapis.com/maps/api/js?key=AIzaSyBmuZ4dB6S3kpFgkUviSfAoP5h9QoH8Pbg&libraries=places';
    document.body.appendChild(googleMapsScript);

    // Load Store Locator script
    const storeLocatorScript = document.createElement('script');
    storeLocatorScript.type = 'text/javascript';
    storeLocatorScript.id = 'storelocatorscript';
    storeLocatorScript.dataset.uid = 'MKPAHXoXV568tSmJYOG1dMsHyOYmxF5t';
    storeLocatorScript.dataset.settings = 'store_list_layout=Left';
    storeLocatorScript.src = '//cdn.storelocatorwidgets.com/widget/widget.js';
    document.body.appendChild(storeLocatorScript);

    return () => {
      // Cleanup scripts if the component unmounts
      document.body.removeChild(googleMapsScript);
      document.body.removeChild(storeLocatorScript);
    };
  }, []); // Empty dependency array ensures this runs only once

  const iframe =
    '<div id="storelocatorwidget" class="dealers-page" style="width:100%;"><p>Loading <a href="https://www.storelocatorwidgets.com">Locator Software</a>...</p></div>';
  return (
    <div className="locally">
      <div id="retailers" className="retailers">
        <h2>Check Out Our Retailers</h2>
        <div className="inside-xl">
          <div className="upc-contain flex-md">
            <div className="sixty">
              <div className="text-center">
                <Button
                  className="button-book"
                  color="warning"
                  size="md"
                  onClick={toggleClass}
                >
                  View Map
                </Button>
              </div>
              <div className={isActive ? 'clicky active' : 'clicky notactive'}>
                <div className="clicky-container">
                  <Button className="clicky-close" onClick={toggleClass}>
                    <span>Close Window</span>
                    {/* <Button close /> */}
                  </Button>
                  <div dangerouslySetInnerHTML={{__html: iframe}} />
                </div>
              </div>
            </div>
            <div className="forty">
              <div className="flex-vertical text-center">
                <h3>Find It Online</h3>
                <div className="upc-button">
                  <a href="https://www.obrien.com/dealers">
                    View Online Retailers
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="locOverlay"></div>
      </div>
    </div>
  );
}

const PRODUCT_VARIANT_FRAGMENT = `#graphql
  fragment ProductVariant on ProductVariant {
    availableForSale
    compareAtPrice {
      amount
      currencyCode
    }
    id
    image {
      __typename
      id
      url
      altText
      width
      height
    }
    price {
      amount
      currencyCode
    }
    product {
      title
      handle
    }
    selectedOptions {
      name
      value
    }
    sku
    title
    unitPrice {
      amount
      currencyCode
    }
  }
`;

const PRODUCT_FRAGMENT = `#graphql
  fragment Product on Product {
    id
    title
    vendor
    handle
    descriptionHtml
    description
    images(first: 10) {
      nodes {
        url
        id
        url
        altText
        width
        height
      }
    }
    options {
      name
      values
    }
    selectedVariant: variantBySelectedOptions(selectedOptions: $selectedOptions, ignoreUnknownOptions: true, caseInsensitiveMatch: true) {
      ...ProductVariant
    }
    metafieldbanner: metafield(namespace: "custom", key: "banner") {
      value
      reference {
        ... on MediaImage {
          image {
            url
            width
            height
            id
            altText
          }
        }
      }
    }
    metamaindescription: metafield(
      namespace: "custom"
      key: "main_description"
    ) {
      value
    }
    metatab2: metafield(namespace: "custom", key: "tab2") {
        value
    }
    metaPerformancetitle1: metafield(
      namespace: "custom"
      key: "performance_title_1"
    ) {
      value
    }
    metaperformanceanimation1: metafield(
      namespace: "custom"
      key: "performance_animation_1"
    ) {
      value
    }
    metaPerformancetitle2: metafield(
      namespace: "custom"
      key: "performance_title_2"
    ) {
      value
    }
    metaperformanceanimation2: metafield(
      namespace: "custom"
      key: "performance_animation_2"
    ) {
      value
    }
    metaPerformancetitle3: metafield(
      namespace: "custom"
      key: "performance_title_3"
    ) {
      value
    }
    metaperformanceanimation3: metafield(
      namespace: "custom"
      key: "performance_animation_3"
    ) {
      value
    }
    metaPerformancetitle4: metafield(
      namespace: "custom"
      key: "performance_title_4"
    ) {
      value
    }
    metaperformanceanimation4: metafield(
      namespace: "custom"
      key: "performance_animation_4"
    ) {
      value
    }
    metaPerformancetitle5: metafield(
      namespace: "custom"
      key: "performance_title_5"
    ) {
      value
    }
    metaperformanceanimation5: metafield(
      namespace: "custom"
      key: "performance_animation_5"
    ) {
      value
    }
    metaperformanceimage1: metafield(
        namespace: "custom"
        key: "performance_image_1"
      ) {
        value
        reference {
          ... on MediaImage {
            image {
              url
              width
              height
              id
              altText
            }
          }
        }
      }
      metaperformanceimage1title: metafield(
        namespace: "custom"
        key: "performance_image_1_title"
      ) {
        value
      }
      metaperformance1description: metafield(
        namespace: "custom"
        key: "performance_description_1"
      ) {
        value
      }
      metaperformanceimage2: metafield(
        namespace: "custom"
        key: "performance_image_2"
      ) {
        value
        reference {
          ... on MediaImage {
            image {
              url
              width
              height
              id
              altText
            }
          }
        }
      }
      metaperformanceimage2title: metafield(
        namespace: "custom"
        key: "performance_image_2_title"
      ) {
        value
      }
      metaperformancetitlebottom: metafield(
        namespace: "custom"
        key: "performance_title_bottom"
      ) {
        value
      }
      productvideo: metafield(namespace: "custom", key: "product_video") {
        value
      }
      productvideo2: metafield(namespace: "custom", key: "product_video_2") {
        value
      }
      videoimage: metafield(namespace: "custom", key: "video_image") {
        value
        reference {
          ... on MediaImage {
            image {
              url
              width
              height
              id
              altText
            }
          }
        }
      }
      dinp: metafield(namespace: "custom", key: "prop_65_dinp") {
        value
      }
      dnhp: metafield(namespace: "custom", key: "prop_65_dnhp") {
        value
      }
      ffimage1: metafield(namespace: "custom", key: "ff1_image") {
        value
        description
        reference {
          ... on MediaImage {
            image {
              url
              width
              height
              id
              altText
            }
          }
        }
      }
      fftitle1: metafield(namespace: "custom", key: "ff1_title") {
        value
      }
      ffdescription1: metafield(namespace: "custom", key: "ff1_description") {
        value
      }
      ffimage2: metafield(namespace: "custom", key: "ff2_image") {
        value
        description
        reference {
          ... on MediaImage {
            image {
              url
              width
              height
              id
              altText
            }
          }
        }
      }
      fftitle2: metafield(namespace: "custom", key: "ff2_title") {
        value
      }
      ffdescription2: metafield(namespace: "custom", key: "ff2_description") {
        value
      }
    variants(first: 1) {
      nodes {
        ...ProductVariant
      }
    }
    seo {
      description
      title
    }
  }
  ${PRODUCT_VARIANT_FRAGMENT}
`;

const PRODUCT_QUERY = `#graphql
  query Product(
    $country: CountryCode
    $handle: String!
    $language: LanguageCode
    $selectedOptions: [SelectedOptionInput!]!
  ) @inContext(country: $country, language: $language) {
    product(handle: $handle) {
      ...Product
    }
  }
  ${PRODUCT_FRAGMENT}
`;

const PRODUCT_VARIANTS_FRAGMENT = `#graphql
  fragment ProductVariants on Product {
    variants(first: 250) {
      nodes {
        ...ProductVariant
      }
    }
  }
  ${PRODUCT_VARIANT_FRAGMENT}
`;

const VARIANTS_QUERY = `#graphql
  ${PRODUCT_VARIANTS_FRAGMENT}
  query ProductVariants(
    $country: CountryCode
    $language: LanguageCode
    $handle: String!
  ) @inContext(country: $country, language: $language) {
    product(handle: $handle) {
      ...ProductVariants
    }
  }
`;

/** @typedef {import('@shopify/remix-oxygen').LoaderFunctionArgs} LoaderFunctionArgs */
/** @template T @typedef {import('@remix-run/react').MetaFunction<T>} MetaFunction */
/** @typedef {import('@remix-run/react').FetcherWithComponents} FetcherWithComponents */
/** @typedef {import('storefrontapi.generated').ProductFragment} ProductFragment */
/** @typedef {import('storefrontapi.generated').ProductVariantsQuery} ProductVariantsQuery */
/** @typedef {import('storefrontapi.generated').ProductVariantFragment} ProductVariantFragment */
/** @typedef {import('@shopify/hydrogen').VariantOption} VariantOption */
/** @typedef {import('@shopify/hydrogen/storefront-api-types').CartLineInput} CartLineInput */
/** @typedef {import('@shopify/hydrogen/storefront-api-types').SelectedOption} SelectedOption */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */
