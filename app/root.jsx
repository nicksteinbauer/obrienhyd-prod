import {cssBundleHref} from '@remix-run/css-bundle';
import {useNonce} from '@shopify/hydrogen';
import {defer} from '@shopify/remix-oxygen';
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  LiveReload,
  useMatches,
  useRouteError,
  useLoaderData,
  ScrollRestoration,
  isRouteErrorResponse,
} from '@remix-run/react';
import favicon from '../public/favicon.svg';
import resetStyles from './styles/reset.css?url';
import appStyles from './styles/app.css?url';
import {Layout} from '~/components/Layout';
import {SearchForm} from './components/Search';

import ReactGA from 'react-ga4';
// import {Suspense} from 'react';
ReactGA.initialize([
  {
    trackingId: 'G-LX25VH4JXM',
  },
  {
    trackingId: 'AW-11157580141',
  },
]);

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
 * Access the result of the root loader from a React component.
 * @return {LoaderReturnData}
 */
export const useRootLoaderData = () => {
  const [root] = useMatches();
  return root?.data;
};

/**
 * @param {LoaderFunctionArgs}
 */
export async function loader({context}) {
  const {storefront, customerAccount, cart} = context;
  const publicStoreDomain = context.env.PUBLIC_STORE_DOMAIN;

  const isLoggedInPromise = customerAccount.isLoggedIn();

  // defer the cart query by not awaiting it
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
  const matches = useMatches();
  const isProductRoute = matches.some((m) =>
    /^\/products\/\w+/.test(m.pathname),
  );

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        <script
          id="gorgias-chat-widget-install-v3"
          src="https://config.gorgias.chat/bundle-loader/01HKTCXXVCJSJGNZNH55W29XD4"
        />
        {/* ACSB Script */}
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
          (function(){
            var s = document.createElement("script");
            var h = document.querySelector("head") || document.body;
            s.src = "https://acsbapp.com/apps/app/dist/js/app.js";
            s.async = true;
            s.onload = function(){
              acsbJS.init({
                statementLink : "",
                footerHtml : "",
                hideMobile : false,
                hideTrigger : false,
                disableBgProcess : false,
                language : "en",
                position : "left",
                leadColor : "#0276b2",
                triggerColor : "#0276b2",
                triggerRadius : "50%",
                triggerPositionX : "left",
                triggerPositionY : "bottom",
                triggerIcon : "people",
                triggerSize : "medium",
                triggerOffsetX : 20,
                triggerOffsetY : 13,
                mobile : {
                  triggerSize : "medium",
                  triggerPositionX : "left",
                  triggerPositionY : "bottom",
                  triggerOffsetX : 20,
                  triggerOffsetY : 13,
                  triggerRadius : "50%"
                }
              });
            };
            h.appendChild(s);
          })();
        `,
          }}
        /> */}
        {isProductRoute && (
          <>
            <script
              type="text/javascript"
              id="storelocatorscript"
              data-uid="MKPAHXoXV568tSmJYOG1dMsHyOYmxF5t"
              data-settings="store_list_layout=Left"
              src="//cdn.storelocatorwidgets.com/widget/widget.js"
            ></script>
          </>
        )}
        <meta
          name="google-site-verification"
          content="U81j3usvQnYPTdy01rIMsGnoiCctOQBfnwPOX1S1OEg"
        />
        {/* Google Analytics */}
        <script
          type="text/javascript"
          src="//maps.googleapis.com/maps/api/js?key=AIzaSyBmuZ4dB6S3kpFgkUviSfAoP5h9QoH8Pbg&libraries=places"
        ></script>

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
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  const rootData = useRootLoaderData();
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
        <Layout {...rootData}>
          <div className="collectionPage actualPage">
            <div className="theRest">
              <div className="inside-lg">
                <header>
                  <div>
                    <h1>Oops</h1>
                  </div>
                  <h3>
                    {errorStatus}
                    {errorMessage && <span> - {errorMessage}</span>}
                  </h3>
                </header>
                <div className="text-center inside-sm">
                  <p>
                    The page you were looking for could not be found. It might
                    have been removed, renamed, or did not exist in the first
                    place. Perhaps searching can help.
                  </p>
                  <div className="searchForm">
                    <SearchForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
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
/** @typedef {import('@shopify/hydrogen/storefront-api-types').CustomerAccessToken} CustomerAccessToken */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */
