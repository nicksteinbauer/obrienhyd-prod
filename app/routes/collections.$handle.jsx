import {json, redirect} from '@shopify/remix-oxygen';
import {useLoaderData, Link} from '@remix-run/react';
import {
  Pagination,
  getPaginationVariables,
  Image,
  Money,
} from '@shopify/hydrogen';
import {useVariantUrl} from '~/lib/variants';
import {BannerImageCollection} from '~/components/obrien/meta/BannerImageCollection';
import PageViewViewContentPixel from '~/components/metaPixel/PageViewViewContentPixel';

/**
 * @type {MetaFunction<typeof loader>}
 */
export const meta = ({data}) => {
  return [
    {
      title: `${
        data?.collection.seo.title
          ? data?.collection.seo.title
          : data?.collection.title
      } Collection | O'Brien Watersports`,
    },
  ];
};

/**
 * @param {LoaderFunctionArgs}
 */
export async function loader({request, params, context}) {
  const {handle} = params;
  const {storefront} = context;
  const paginationVariables = getPaginationVariables(request, {
    pageBy: 40,
  });

  if (!handle) {
    return redirect('/collections');
  }

  const {collection} = await storefront.query(COLLECTION_QUERY, {
    variables: {handle, ...paginationVariables},
  });

  if (!collection) {
    throw new Response(`Collection ${handle} not found`, {
      status: 404,
    });
  }
  return json({collection});
}

export default function Collection() {
  /** @type {LoaderReturnData} */
  const {collection} = useLoaderData();

  return (
    <>
      <PageViewViewContentPixel />
      <div className="collectionPage">
        <BannerImageCollection myImage={collection.image} />
        <div className="theRest">
          <div className="inside-xl">
            <header>
              <h1>{collection.title}</h1>
              {collection?.description && (
                <div className="">
                  <div>{collection.description}</div>
                </div>
              )}
            </header>
          </div>
          <Pagination connection={collection.products}>
            {({nodes, isLoading, PreviousLink, NextLink}) => (
              <>
                <div className="inside-xxl">
                  <PreviousLink className="nextPrev">
                    {isLoading ? 'Loading...' : <span>↑ Load previous</span>}
                  </PreviousLink>
                </div>
                <ProductsGrid products={nodes} />
                <div className="inside-xxl">
                  <NextLink className="nextPrev">
                    {isLoading ? 'Loading...' : <span>Load more ↓</span>}
                  </NextLink>
                </div>
              </>
            )}
          </Pagination>
        </div>
      </div>
    </>
  );
}

/**
 * @param {{products: ProductItemFragment[]}}
 */
function ProductsGrid({products}) {
  return (
    <ul className="auto-grid-lg productGrid inside-xxl">
      {products.map((product, index) => {
        return (
          <li key={product.id}>
            <ProductItem
              product={product}
              loading={index < 12 ? 'eager' : undefined}
            />
          </li>
        );
      })}
    </ul>
  );
}

/**
 * @param {{
 *   product: ProductItemFragment;
 *   loading?: 'eager' | 'lazy';
 * }}
 */
function ProductItem({product, loading}) {
  const variant = product.variants.nodes[0];
  const variantUrl = useVariantUrl(product.handle, variant.selectedOptions);

  const {compareAtPriceRange} = product;
  const compareAtPrice = compareAtPriceRange?.maxVariantPrice?.amount;

  return (
    <Link
      className="product-item"
      key={product.id}
      prefetch="intent"
      to={variantUrl}
      reloadDocument
    >
      <div className="card-image">
        <div className="text-right text-notice">
          {product.totalInventory < 1 && (
            <span className="outOfStock">Out of Stock</span>
          )}

          {parseFloat(compareAtPrice) > 0 && (
            <span className="newSale">Sale</span>
          )}
        </div>
        {product.featuredImage && (
          <Image
            alt={product.featuredImage.altText || product.title}
            aspectRatio="1/1"
            data={product.featuredImage}
            loading={loading}
            sizes="(min-width: 45em) 400px, 100vw"
          />
        )}
      </div>
      <h3>{product.title}</h3>
      <div className="price always-flex">
        <Money data={product.priceRange.minVariantPrice} />
        {parseFloat(compareAtPrice) > 0 && (
          <s className="opacity-50 strike comparePrice">
            <Money data={compareAtPriceRange.maxVariantPrice} />
          </s>
        )}
      </div>
    </Link>
  );
}

const PRODUCT_ITEM_FRAGMENT = `#graphql
  fragment MoneyProductItem on MoneyV2 {
    amount
    currencyCode
  }
  fragment ProductItem on Product {
    id
    handle
    title
    totalInventory
    featuredImage {
      id
      altText
      url
      width
      height
    }
    priceRange {
      minVariantPrice {
        ...MoneyProductItem
      }
      maxVariantPrice {
        ...MoneyProductItem
      }
    }
    compareAtPriceRange {
      maxVariantPrice {
        ...MoneyProductItem
      }
    }
    variants(first: 1) {
      nodes {
        selectedOptions {
          name
          value
        }
      }
    }
    collections(first: 10) {
      nodes {
        title
      }
    }
  }
`;

// NOTE: https://shopify.dev/docs/api/storefront/2022-04/objects/collection
const COLLECTION_QUERY = `#graphql
  ${PRODUCT_ITEM_FRAGMENT}
  query Collection(
    $handle: String!
    $country: CountryCode
    $language: LanguageCode
    $first: Int
    $last: Int
    $startCursor: String
    $endCursor: String
  ) @inContext(country: $country, language: $language) {
    collection(handle: $handle) {
      id
      handle
      title
      description
      seo {
        description
        title
      }
      image {
        id
        url
        width
        height
        altText
      }
      products(
        first: $first,
        last: $last,
        before: $startCursor,
        after: $endCursor
      ) {
        nodes {
          ...ProductItem
        }
        pageInfo {
          hasPreviousPage
          hasNextPage
          endCursor
          startCursor
        }
      }
    }
  }
`;

/** @typedef {import('@shopify/remix-oxygen').LoaderFunctionArgs} LoaderFunctionArgs */
/** @template T @typedef {import('@remix-run/react').MetaFunction<T>} MetaFunction */
/** @typedef {import('storefrontapi.generated').ProductItemFragment} ProductItemFragment */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */
