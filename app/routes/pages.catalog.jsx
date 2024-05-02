import {json} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';
import PageViewViewContentPixel from '~/components/metaPixel/PageViewViewContentPixel';

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
  const {page} = await context.storefront.query(PAGE_QUERY);

  if (!page) {
    throw new Response('Not Found', {status: 404});
  }

  return json({page});
}

export default function Page() {
  /** @type {LoaderReturnData} */
  const {page} = useLoaderData();

  return (
    <>
      <PageViewViewContentPixel />
      <div className="collectionPage actualPage">
        <div className="theRest">
          <div className="inside-lg">
            <header>
              <h1>{page.title}</h1>
            </header>
            <main
              className="basicContent"
              dangerouslySetInnerHTML={{__html: page.body}}
            />
            <iframe
              title="O'Brien Catalog"
              //style="width:100%; min-height: 900px;"
              className="catalogIframe"
              type="text/html"
              scrolling="no"
              frameBorder="0"
              src="https://user-92916592834.cld.bz/2024-OB-AG-catalog-9-12"
              allowFullScreen="allowFullScreen"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

const PAGE_QUERY = `#graphql
  query PageCatalog(
    $language: LanguageCode,
    $country: CountryCode,
  )
  @inContext(language: $language, country: $country) {
    page(handle: "catalog") {
      id
      title
      body
      seo {
        description
        title
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
    }
  }
`;

/** @typedef {import('@shopify/remix-oxygen').LoaderFunctionArgs} LoaderFunctionArgs */
/** @template T @typedef {import('@remix-run/react').MetaFunction<T>} MetaFunction */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */
