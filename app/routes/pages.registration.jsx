import {json} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';
//import RegistrationForm from '~/components/forms/RegistrationForm';
import PageViewViewContentContactPixel from '~/components/metaPixel/PageViewViewContentContactPixel';

import JotformRegistration from '~/components/forms/JotformRegistration';

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
      <PageViewViewContentContactPixel />
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
            <JotformRegistration />
          </div>
        </div>
      </div>
    </>
  );
}

const PAGE_QUERY = `#graphql
  query PageRegistration(
    $language: LanguageCode,
    $country: CountryCode,
  )
  @inContext(language: $language, country: $country) {
    page(handle: "registration") {
      id
      title
      body
      seo {
        description
        title
      }
    }
  }
`;

/** @typedef {import('@shopify/remix-oxygen').LoaderFunctionArgs} LoaderFunctionArgs */
/** @template T @typedef {import('@remix-run/react').MetaFunction<T>} MetaFunction */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */
