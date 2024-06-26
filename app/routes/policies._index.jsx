import {json} from '@shopify/remix-oxygen';
import {useLoaderData, Link} from '@remix-run/react';
import PageViewViewContentPixel from '~/components/metaPixel/PageViewViewContentPixel';

/**
 * @param {LoaderFunctionArgs}
 */

export const meta = ({data}) => {
  return [
    {
      title: "Policies | O'Brien Watersports",
    },
  ];
};
export async function loader({context}) {
  const data = await context.storefront.query(POLICIES_QUERY);
  const policies = Object.values(data.shop || {});

  if (!policies.length) {
    throw new Response('No policies found', {status: 404});
  }

  return json({policies});
}

export default function Policies() {
  /** @type {LoaderReturnData} */
  const {policies} = useLoaderData();

  return (
    <>
      <PageViewViewContentPixel />
      <div className="collectionPage actualPage policies">
        <div className="theRest">
          <div className="inside-lg">
            <header>
              <h1>Policies</h1>
            </header>
            <div>
              {policies.map((policy) => {
                if (!policy) return null;
                return (
                  <fieldset key={policy.id}>
                    <Link to={`/policies/${policy.handle}`}>
                      {policy.title}
                    </Link>
                  </fieldset>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const POLICIES_QUERY = `#graphql
  fragment PolicyItem on ShopPolicy {
    id
    title
    handle
  }
  query Policies ($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    shop {
      privacyPolicy {
        ...PolicyItem
      }
      shippingPolicy {
        ...PolicyItem
      }
      termsOfService {
        ...PolicyItem
      }
      refundPolicy {
        ...PolicyItem
      }
      subscriptionPolicy {
        id
        title
        handle
      }
    }
  }
`;

/** @typedef {import('@shopify/remix-oxygen').LoaderFunctionArgs} LoaderFunctionArgs */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */
