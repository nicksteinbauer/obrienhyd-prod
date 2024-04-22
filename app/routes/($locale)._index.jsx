import {defer} from '@shopify/remix-oxygen';
import {Await, useLoaderData, Link, NavLink} from '@remix-run/react';
import {Suspense} from 'react';
import {Image, Money} from '@shopify/hydrogen';
import Hero from '../components/Hero/Hero';
// import LineDrawing from '../components/Hero/LineDrawing';
import heroimg from '../../public/HeroTest.jpg';

/**
 * @type {MetaFunction}
 */
export const meta = () => {
  return [{title: 'Aquaglide Aquaparks & Lakefront Play Structures | Home'}];
};

/**
 * @param {LoaderFunctionArgs}
 */
export async function loader({context}) {
  const {storefront} = context;
  const {collections} = await storefront.query(FEATURED_COLLECTION_QUERY);
  const featuredCollection = collections.nodes[0];
  const recommendedProducts = storefront.query(RECOMMENDED_PRODUCTS_QUERY);

  return defer({featuredCollection, recommendedProducts});
}

export default function Homepage() {
  /** @type {LoaderReturnData} */
  const data = useLoaderData();
  return (
    <main className="home">
      <Hero />
      {/* <LineDrawing /> */}
      <section id="underHome" className="underHome">
        <div className="underHomeLine inside-sm">
          <div className="underHomeLineActual" />
        </div>
        <div className="inside-xxl flex-sm fullLine noGap">
          <div className="underHomeInd always-flex">
            <div className="filler" />
            <div className="underHomeLineActualSmall" />
            <div className="filler topLine" />
          </div>
          <div className="underHomeInd always-flex noGap">
            <div className="filler topLine" />
            <div className="underHomeLineActualSmall" />
            <div className="filler" />
          </div>
        </div>
        <div className="inside-xxl flex-sm gap50 pushUp">
          <div className="underHomeInd">
            <img src={heroimg} alt="heroimg" />
            <div className="underHomeIndContent">
              <div className="titleContainer text-center">
                <h3>Commercial Aquaparks</h3>
              </div>
              <div className="content">
                <p>
                  Aquaglide Aquapark products are designed for the long-term
                  durability demands of commercial, resort, and camp use. Each
                  design is vetted and third-party tested to meet the highest
                  quality and product safety standards, then continuously
                  refined by using feedback from our global customer network.
                  Aquaglide inflatable structures can be used as standalone
                  features or combined with other Aquapark features to create
                  the ultimate water playground.
                </p>
              </div>
              <div className="buttonContainer text-center">
                <NavLink className="button" to="">
                  Explore Aquapark
                </NavLink>
              </div>
            </div>
          </div>
          <div className="underHomeInd">
            <img src={heroimg} alt="heroimg" />
            <div className="underHomeIndContent">
              <div className="titleContainer text-center">
                <h3>Commercial Aquaparks</h3>
              </div>
              <div className="content">
                <p>
                  Aquaglide Aquapark products are designed for the long-term
                  durability demands of commercial, resort, and camp use. Each
                  design is vetted and third-party tested to meet the highest
                  quality and product safety standards, then continuously
                  refined by using feedback from our global customer network.
                  Aquaglide inflatable structures can be used as standalone
                  features or combined with other Aquapark features to create
                  the ultimate water playground.
                </p>
              </div>
              <div className="buttonContainer text-center">
                <NavLink className="button" to="">
                  Explore Aquapark
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FeaturedCollection collection={data.featuredCollection} />
      <RecommendedProducts products={data.recommendedProducts} />
    </main>
  );
}

/**
 * @param {{
 *   collection: FeaturedCollectionFragment;
 * }}
 */
function FeaturedCollection({collection}) {
  if (!collection) return null;
  const image = collection?.image;
  return (
    <Link
      className="featured-collection"
      to={`/collections/${collection.handle}`}
    >
      {image && (
        <div className="featured-collection-image">
          <Image data={image} sizes="100vw" />
        </div>
      )}
      <h1>{collection.title}</h1>
    </Link>
  );
}

/**
 * @param {{
 *   products: Promise<RecommendedProductsQuery>;
 * }}
 */
function RecommendedProducts({products}) {
  return (
    <div className="recommended-products">
      <h2>Recommended Products</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={products}>
          {({products}) => (
            <div className="recommended-products-grid">
              {products.nodes.map((product) => (
                <Link
                  key={product.id}
                  className="recommended-product"
                  to={`/products/${product.handle}`}
                >
                  <Image
                    data={product.images.nodes[0]}
                    aspectRatio="1/1"
                    sizes="(min-width: 45em) 20vw, 50vw"
                  />
                  <h4>{product.title}</h4>
                  <small>
                    <Money data={product.priceRange.minVariantPrice} />
                  </small>
                </Link>
              ))}
            </div>
          )}
        </Await>
      </Suspense>
      <br />
    </div>
  );
}

const FEATURED_COLLECTION_QUERY = `#graphql
  fragment FeaturedCollection on Collection {
    id
    title
    image {
      id
      url
      altText
      width
      height
    }
    handle
  }
  query FeaturedCollection($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    collections(first: 1, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...FeaturedCollection
      }
    }
  }
`;

const RECOMMENDED_PRODUCTS_QUERY = `#graphql
  fragment RecommendedProduct on Product {
    id
    title
    handle
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
    products(first: 4, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...RecommendedProduct
      }
    }
  }
`;

/** @typedef {import('@shopify/remix-oxygen').LoaderFunctionArgs} LoaderFunctionArgs */
/** @template T @typedef {import('@remix-run/react').MetaFunction<T>} MetaFunction */
/** @typedef {import('storefrontapi.generated').FeaturedCollectionFragment} FeaturedCollectionFragment */
/** @typedef {import('storefrontapi.generated').RecommendedProductsQuery} RecommendedProductsQuery */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */
