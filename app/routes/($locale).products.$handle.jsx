import {Suspense} from 'react';
import {defer, redirect} from '@shopify/remix-oxygen';
import {Await, Link, useLoaderData} from '@remix-run/react';
import StockNotification from '../components/klaviyo/StockNotification';
import {Link as SmoothLink} from 'react-scroll';
import VideoContainer from '../components/Video/VideoContainer';

import {RichTextRenderer} from '@novatize-mattheri/shopify-richtext-renderer';

import {
  Image,
  Money,
  VariantSelector,
  getSelectedProductOptions,
  CartForm,
} from '@shopify/hydrogen';
import {getVariantUrl} from '~/lib/variants';

/**
 * @type {MetaFunction<typeof loader>}
 */
export const meta = ({data}) => {
  return [{title: `Hydrogen | ${data?.product.title ?? ''}`}];
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
    featuredImage,
    productvideo,
    productvideo2,
    keytechfeatures,
    keyuseractivities,
    techspecifications,
    productnotes,
  } = product;

  const FeaturedImage = featuredImage?.reference?.image
    ? featuredImage?.reference?.image
    : null;

  const productVideo = productvideo?.value ? productvideo?.value : null;
  const productVideo2 = productvideo2?.value ? productvideo2?.value : null;

  const keyTechFeatures = keytechfeatures?.value
    ? keytechfeatures?.value
    : null;

  const keyUserActivities = keyuseractivities?.value
    ? keyuseractivities?.value
    : null;

  const techSpecifications = techspecifications?.value
    ? techspecifications?.value
    : null;

  const productNotes = productnotes?.value ? productnotes?.value : null;

  let FeatureListTitles = [];
  if (product.featureListTitles?.value) {
    try {
      FeatureListTitles = JSON.parse(product.featureListTitles.value);
    } catch (error) {
      throw new Error('Error parsing FeatureListTitles JSON:', error);
      // Optionally handle the error, e.g., set default values or log it
    }
  }

  let FeatureListContents = [];
  if (product.featureListContents?.value) {
    try {
      FeatureListContents = JSON.parse(product.featureListContents.value);
    } catch (error) {
      throw new Error('Error parsing FeatureListContents JSON:', error);
      // Optionally handle the error, e.g., set default values or log it
    }
  }

  return (
    <main className="interior productMain">
      <div className="flex-sm productFlex">
        {/* <ProductImage image={selectedVariant?.image} /> */}
        <ProductMain
          selectedVariant={selectedVariant}
          product={product}
          variants={variants}
        />
        <ProductImages productimages={product.images} />
      </div>
      {FeatureListTitles ? (
        <section id="features" name="features">
          <div className="inside-xxl text-center">
            <h2 className="sectionTitle">Features</h2>
          </div>

          <div className="inside-xxl auto-grid-home">
            {FeatureListTitles.map((FeatureListTitle, index) => (
              // eslint-disable-next-line react/jsx-key
              <FeatureLoop
                FeatureListTitle={FeatureListTitle}
                index={index}
                FeatureListContents={FeatureListContents}
              />
            ))}
          </div>
        </section>
      ) : null}
      {productVideo !== null && (
        <section id="media">
          <div className="featuredContainer">
            <div className="aboveGrade text-center">
              <h2 className="sectionTitle">Media</h2>

              <section id="video">
                <VideoContainer
                  productVideo={productVideo}
                  productVideo2={productVideo2}
                />
              </section>
            </div>
            <Image data={FeaturedImage} sizes="(min-width: 45em) 50vw, 100vw" />
          </div>
        </section>
      )}
      {keyTechFeatures ||
      keyUserActivities ||
      techSpecifications ||
      productNotes ? (
        <section id="specs" className="inside-xxl">
          <div className="text-center">
            <h2 className="sectionTitle">More Specs</h2>
          </div>
          {keyTechFeatures ? (
            <div className="indSpec keyTechFeatures">
              <h3>Key Tech Features</h3>
              <RichTextRenderer data={keyTechFeatures} />
            </div>
          ) : null}
          {keyUserActivities ? (
            <div className="indSpec keyUserActivities">
              <h3>Key User Activities</h3>
              <RichTextRenderer data={keyUserActivities} />
            </div>
          ) : null}
          {techSpecifications ? (
            <div className="indSpec techSpecifications">
              <h3>Technical Specifications</h3>
              <RichTextRenderer data={techSpecifications} />
            </div>
          ) : null}
          {productNotes ? (
            <div className="indSpec productNotes">
              <h3>Product Notes</h3>
              <RichTextRenderer data={productNotes} />
            </div>
          ) : null}
        </section>
      ) : null}
    </main>
  );
}

function FeatureLoop({index, FeatureListTitle, FeatureListContents}) {
  const getClassNames = () => {
    if (FeatureListTitle == 'Best For') {
      return 'featureIcon bestFor';
    } else if (FeatureListTitle == 'Capacity') {
      return 'featureIcon capacity';
    } else if (FeatureListTitle == 'Warranty') {
      return 'featureIcon warranty';
    } else if (FeatureListTitle == 'Dimensions') {
      return 'featureIcon dimensions';
    } else if (FeatureListTitle == 'Slide Height') {
      return 'featureIcon slideHeight';
    } else if (FeatureListTitle == 'Box Dimensions') {
      return 'featureIcon boxDimensions';
    } else if (FeatureListTitle == 'Min Water Depth') {
      return 'featureIcon minWaterDepth';
    } else if (FeatureListTitle == 'Includes') {
      return 'featureIcon includes';
    } else if (FeatureListTitle == 'Not Included') {
      return 'featureIcon notIncluded';
    } else if (FeatureListTitle == 'Max Pressure') {
      return 'featureIcon maxPressure';
    } else if (FeatureListTitle == 'Air Flow') {
      return 'featureIcon airFlow';
    } else {
      return 'featureIcon';
    }
  };
  return (
    <div key={index} className="individualIcon">
      <div className={getClassNames()}>
        <h4>{FeatureListTitle}</h4>
      </div>
      <p>{FeatureListContents[index]}</p>
    </div>
  );
}

/**
 * @param {{image: ProductVariantFragment['image']}}
 */
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
      {productimages.nodes.map((image, index) => (
        <Image
          alt={image.altText || `Image ${index + 1}`}
          aspectRatio="1/1"
          data={image}
          key={image.id}
          sizes="(min-width: 45em) 50vw, 100vw"
        />
      ))}
    </div>
  );
}

/**
 * @param {{
 *   product: ProductFragment;
 *   selectedVariant: ProductFragment['selectedVariant'];
 *   variants: Promise<ProductVariantsQuery>;
 * }}
 */
function ProductMain({selectedVariant, product, variants}) {
  const {
    title,
    descriptionHtml,
    featureListTitles,
    productvideo,
    keytechfeatures,
    keyuseractivities,
    techspecifications,
    productnotes,
  } = product;
  const productVideo = productvideo?.value ? productvideo?.value : null;
  return (
    <div className="product-main flex-vertical">
      <div className="product-main-interior">
        <div className="product-main-interior-padding">
          <h1>{title}</h1>
          <ProductPrice selectedVariant={selectedVariant} />
          <div
            className="product-description"
            dangerouslySetInnerHTML={{__html: descriptionHtml}}
          />
          {featureListTitles ? (
            <nav className="smoothOperator">
              <ul>
                {featureListTitles ? (
                  <li>
                    <SmoothLink to="features">Features</SmoothLink>
                  </li>
                ) : null}
                {productVideo ? (
                  <li>
                    <SmoothLink to="media">Media</SmoothLink>
                  </li>
                ) : null}
                {keytechfeatures ||
                keyuseractivities ||
                techspecifications ||
                productnotes ? (
                  <li>
                    <SmoothLink to="specs">More Specs</SmoothLink>
                  </li>
                ) : null}
              </ul>
            </nav>
          ) : null}
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
        </div>
      </div>
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
    <div className="product-price">
      {selectedVariant?.compareAtPrice ? (
        <>
          <div className="product-price-on-sale">
            <span className="sale">Sale</span>
            {selectedVariant ? <Money data={selectedVariant.price} /> : null}
            <s>
              <Money data={selectedVariant.compareAtPrice} />
            </s>
          </div>
        </>
      ) : (
        selectedVariant?.price && <Money data={selectedVariant?.price} />
      )}
    </div>
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
  return (
    <div className="product-form">
      <VariantSelector
        handle={product.handle}
        options={product.options}
        variants={variants}
      >
        {({option}) => <ProductOptions key={option.name} option={option} />}
      </VariantSelector>
      <div
        className={
          selectedVariant?.availableForSale ? 'availableTrue' : 'availableFalse'
        }
      >
        {product.notForSale.value === 'false' ? (
          <>
            {selectedVariant?.availableForSale ? (
              <AddToCartButton
                disabled={!selectedVariant || !selectedVariant.availableForSale}
                onClick={() => {
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
                <>Add To Cart</>
              </AddToCartButton>
            ) : (
              <StockNotification selectedVariant={selectedVariant} />
            )}
          </>
        ) : (
          <div className="contactAcception always-flex">
            <button type="submit">Contact Us</button>
            <span className="smol flex-vertical">
              <span>
                Contact our sales team for more info on product configurations
                that fit your needs.
              </span>
            </span>
          </div>
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
    <div className="product-options" key={option.name}>
      <h5>{option.name}</h5>
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
                border: isActive ? '1px solid black' : '1px solid transparent',
                opacity: isAvailable ? 1 : 0.3,
              }}
            >
              {value}
            </Link>
          );
        })}
      </div>
      <br />
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
    variants(first: 1) {
      nodes {
        ...ProductVariant
      }
    }
    seo {
      description
      title
    }
    featureListTitles: metafield(namespace: "custom", key: "feature_list_title") {
      value
    }
    featureListContents: metafield(namespace: "custom", key: "feature_list_content") {
      value
    }
    notForSale: metafield(namespace: "custom", key: "not_for_sale") {
      value
    }
    featuredImage: metafield(namespace: "custom", key: "featured_image") {
      value
      reference {
        ... on MediaImage {
          id
          image {
            height
            url
            width
            altText
          }
        }
      }
    }
    productvideo: metafield(namespace: "custom", key: "product_video") {
      value
    }
    keytechfeatures: metafield(namespace: "custom", key: "key_technical_features") {
      value
    }
    keyuseractivities: metafield(namespace: "custom", key: "key_user_activities") {
      value
    }
    techspecifications: metafield(namespace: "custom", key: "technical_specifications") {
      value
    }
    productnotes: metafield(namespace: "custom", key: "product_notes") {
      value
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
