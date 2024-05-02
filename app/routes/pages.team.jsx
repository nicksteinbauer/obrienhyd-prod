import {json} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';

import {BannerImageCollection} from '~/components/obrien/meta/BannerImageCollection';
import TeamList from '~/components/obrien/TeamList';

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
  const bannerImage = page.metafieldbanner?.reference?.image
    ? page.metafieldbanner?.reference?.image
    : null;

  return (
    <>
      <PageViewViewContentPixel />
      <div className="collectionPage">
        {bannerImage !== null && (
          <BannerImageCollection myImage={bannerImage} />
        )}
        <header className="notPage flex-vertical">
          <h1>{page.title}</h1>
        </header>
        <div className="theRest">
          <TeamList />
          <div className="inside-xl">
            <main
              className="basicContent padd-vert-20"
              dangerouslySetInnerHTML={{__html: page.body}}
            />
          </div>
        </div>
      </div>
    </>
  );
}

const PAGE_QUERY = `#graphql
  query PageTeam(
    $language: LanguageCode,
    $country: CountryCode,
  )
  @inContext(language: $language, country: $country) {
    page(handle: "team") {
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
