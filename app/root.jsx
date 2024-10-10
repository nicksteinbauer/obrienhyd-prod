import {useNonce, Script} from '@shopify/hydrogen';
import {cssBundleHref} from '@remix-run/css-bundle';
import {defer} from '@shopify/remix-oxygen';
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  useRouteError,
  useLoaderData,
  ScrollRestoration,
  isRouteErrorResponse,
  LiveReload,
  useMatches,
} from '@remix-run/react';
import favicon from '../public/favicon.svg';
import resetStyles from './styles/reset.css?url';
import appStyles from './styles/app.css?url';
import {Layout} from '~/components/Layout';

import ReactGA from 'react-ga4';
import {useEffect} from 'react';

import SearchLogo from './components/logos/SearchLogo';

//import {init as initFullStory} from '@fullstory/browser';
import FullStoryProvider from './components/FullStoryProvider';
/**
 * Access the result of the root loader from a React component.
 * @return {LoaderReturnData}
 */
export const useRootLoaderData = () => {
  const [root] = useMatches();
  return root?.data;
};

/**
 * This is important to avoid re-fetching root queries on sub-navigations
 * @type {ShouldRevalidateFunction}
 */
export const shouldRevalidate = ({formMethod, currentUrl, nextUrl}) => {
  // revalidate when a mutation is performed e.g add to cart, login...
  if (formMethod && formMethod !== 'GET') {
    return true;
  }

  // revalidate when manually revalidating via useRevalidator
  if (currentUrl.toString() === nextUrl.toString()) {
    return true;
  }

  return false;
};

export function links() {
  return [
    ...(cssBundleHref ? [{rel: 'stylesheet', href: cssBundleHref}] : []),
    {rel: 'stylesheet', href: resetStyles},
    {rel: 'stylesheet', href: appStyles},
    {
      rel: 'preconnect',
      href: 'https://cdn.shopify.com',
    },
    {
      rel: 'preconnect',
      href: 'https://shop.app',
    },
    {rel: 'icon', type: 'image/svg+xml', href: favicon},
  ];
}

/**
 * @param {LoaderFunctionArgs}
 */
export async function loader({context}) {
  const {storefront, customerAccount, cart} = context;
  const publicStoreDomain = context.env.PUBLIC_STORE_DOMAIN;

  const isLoggedInPromise = customerAccount.isLoggedIn();
  const cartPromise = cart.get();

  // defer the footer query (below the fold)
  const footerPromise = storefront.query(FOOTER_QUERY, {
    cache: storefront.CacheLong(),
    variables: {
      footerMenuHandle: 'footer', // Adjust to your footer menu handle
    },
  });

  // await the header query (above the fold)
  const headerPromise = storefront.query(HEADER_QUERY, {
    cache: storefront.CacheLong(),
    variables: {
      headerMenuHandle: 'main-menu', // Adjust to your header menu handle
    },
  });

  return defer(
    {
      cart: cartPromise,
      footer: footerPromise,
      header: await headerPromise,
      isLoggedIn: isLoggedInPromise,
      publicStoreDomain,
    },
    {
      headers: {
        'Set-Cookie': await context.session.commit(),
      },
    },
  );
}

export default function App() {
  const nonce = useNonce();
  /** @type {LoaderReturnData} */
  const data = useLoaderData();
  // const matches = useMatches();
  // const isProductRoute = matches.some((m) =>
  //   /^\/products\/\w+/.test(m.pathname),
  // );

  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     initFullStory({
  //       orgId: 'o-1XESPW-na1',
  //     });
  //   }
  // }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://acsbapp.com/apps/app/dist/js/app.js';
    script.async = true;
    script.onload = () => {
      window.acsbJS.init({
        statementLink: '',
        footerHtml: '',
        hideMobile: false,
        hideTrigger: false,
        disableBgProcess: false,
        language: 'en',
        position: 'left',
        leadColor: '#0276b2',
        triggerColor: '#0276b2',
        triggerRadius: '50%',
        triggerPositionX: 'left',
        triggerPositionY: 'bottom',
        triggerIcon: 'people',
        triggerSize: 'medium',
        triggerOffsetX: 20,
        triggerOffsetY: 13,
        mobile: {
          triggerSize: 'medium',
          triggerPositionX: 'left',
          triggerPositionY: 'bottom',
          triggerOffsetX: 20,
          triggerOffsetY: 13,
          triggerRadius: '50%',
        },
      });
    };
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    ReactGA.initialize([
      {
        trackingId: 'G-LX25VH4JXM',
      },
      {
        trackingId: 'AW-11157580141',
      },
    ]);
  }, []);

  useEffect(() => {
    // Create the script element
    const script = document.createElement('script');
    // Set the script source to the Yotpo widget URL
    script.src =
      'https://cdn-widgetsrepository.yotpo.com/v1/loader/CnH95pwO1n8rV0h0gvwhZOsohvKVD8lGqClHszKj';
    // Make the script load asynchronously
    script.async = true;
    // Append the script to the document body
    document.body.appendChild(script);
    // Cleanup the script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array ensures this runs only once

  return (
    <FullStoryProvider>
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <Meta />
          <Links />
          <Script
            async
            type="text/javascript"
            src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=WkytYu"
          />
          <meta
            name="google-site-verification"
            content="U81j3usvQnYPTdy01rIMsGnoiCctOQBfnwPOX1S1OEg"
          />
          {/* Cookie Consent */}
          <script
            type="text/javascript"
            src="https://cdn.cookielaw.org/consent/018f4e81-6455-7a7c-ae48-763d81c2e93b/OtAutoBlock.js"
          ></script>
          <script
            src="https://cdn.cookielaw.org/scripttemplates/otSDKStub.js"
            type="text/javascript"
            data-domain-script="018f4e81-6455-7a7c-ae48-763d81c2e93b"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `function OptanonWrapper() {} 
            `,
            }}
          />
          {/* End Cookie Consent */}
          <script
            id="gorgias-chat-widget-install-v3"
            src="https://config.gorgias.chat/bundle-loader/01HKTCXXVCJSJGNZNH55W29XD4"
          >
            {' '}
          </script>
        </head>
        <body>
          <Layout {...data}>
            <Outlet />
          </Layout>
          <ScrollRestoration nonce={nonce} />
          <Scripts nonce={nonce} />
          <LiveReload nonce={nonce} />
        </body>
      </html>
    </FullStoryProvider>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  /** @type {LoaderReturnData} */
  //const rootData = useLoaderData();
  const nonce = useNonce();
  let errorMessage = 'Unknown error';
  let errorStatus = 500;

  if (isRouteErrorResponse(error)) {
    errorMessage = error?.data?.message ?? error.data;
    errorStatus = error.status;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  }

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Layout>
          <main className="collectionPage interior">
            <div className="collectionDescriptionContainer theRest">
              <div className="inside-md text-center">
                <header className="four04">
                  <h1>Oops</h1>

                  <h2>
                    {errorStatus}
                    {errorMessage && <span> - {errorMessage}</span>}
                  </h2>
                  <p>
                    The page you were looking for could not be found. It might
                    have been removed, renamed, or did not exist in the first
                    place. Perhaps searching can help.
                  </p>
                  <div className="flex-vertical obrienSearchContainer">
                    <form action={`/search`} className="obrienSearch">
                      <input
                        className="search"
                        type="search"
                        placeholder="Search"
                        name="q"
                      />
                      <button type="submit" className="iconSearch">
                        <SearchLogo />
                      </button>
                    </form>
                  </div>
                </header>
              </div>
            </div>
          </main>
        </Layout>
        <ScrollRestoration nonce={nonce} />
        <Scripts nonce={nonce} />
        <LiveReload nonce={nonce} />
      </body>
    </html>
  );
}

const MENU_FRAGMENT = `#graphql
  fragment MenuItem on MenuItem {
    id
    resourceId
    tags
    title
    type
    url
  }
  fragment ChildMenuItem on MenuItem {
    ...MenuItem
  }
  fragment ParentMenuItem on MenuItem {
    ...MenuItem
    items {
      ...ChildMenuItem
    }
  }
  fragment Menu on Menu {
    id
    items {
      ...ParentMenuItem
    }
  }
`;

const HEADER_QUERY = `#graphql
  fragment Shop on Shop {
    id
    name
    description
    primaryDomain {
      url
    }
    brand {
      logo {
        image {
          url
        }
      }
    }
  }
  query Header(
    $country: CountryCode
    $headerMenuHandle: String!
    $language: LanguageCode
  ) @inContext(language: $language, country: $country) {
    shop {
      ...Shop
    }
    menu(handle: $headerMenuHandle) {
      ...Menu
    }
  }
  ${MENU_FRAGMENT}
`;

const FOOTER_QUERY = `#graphql
  query Footer(
    $country: CountryCode
    $footerMenuHandle: String!
    $language: LanguageCode
  ) @inContext(language: $language, country: $country) {
    menu(handle: $footerMenuHandle) {
      ...Menu
    }
  }
  ${MENU_FRAGMENT}
`;

/** @typedef {import('@shopify/remix-oxygen').LoaderFunctionArgs} LoaderFunctionArgs */
/** @typedef {import('@remix-run/react').ShouldRevalidateFunction} ShouldRevalidateFunction */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */
