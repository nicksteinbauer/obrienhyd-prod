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

  return (
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
        <FullStoryScript />

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
  );
}

const FullStoryScript = () => {
  useEffect(() => {
    'use strict';

    function sample(rate, daysValid) {
      const cookieName = '_fs_sample_user';
      try {
        if (
          document.cookie.indexOf(cookieName + '=true') > -1 ||
          document.cookie.indexOf(cookieName + '=false') > -1
        ) {
          return document.cookie.indexOf(cookieName + '=true') > -1;
        } else {
          const shouldSample = Math.random() < rate / 100;
          const days =
            daysValid !== undefined && daysValid > 0 ? daysValid : 30;
          const date = new Date();
          date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
          document.cookie = `${cookieName}=${shouldSample}; expires=${date.toGMTString()}; path=/`;
          return shouldSample;
        }
      } catch (err) {
        console.error('FullStory unavailable, unable to sample user');
        return false;
      }
    }

    const rate = 25;
    const daysValid = 90;
    if (sample(rate, daysValid)) {
      window['_fs_debug'] = false;
      window['_fs_host'] = 'fullstory.com';
      window['_fs_script'] = 'edge.fullstory.com/s/fs.js';
      window['_fs_org'] = 'o-1XESPW-na1';
      window['_fs_namespace'] = 'FS';
      (function (m, n, e, t, l, o, g, y) {
        if (e in m) {
          if (m.console && m.console.log) {
            m.console.log(
              'FullStory namespace conflict. Please set window["_fs_namespace"].',
            );
          }
          return;
        }
        g = m[e] = function (a, b, s) {
          g.q ? g.q.push([a, b, s]) : g._api(a, b, s);
        };
        g.q = [];
        o = n.createElement(t);
        o.async = 1;
        o.crossOrigin = 'anonymous';
        o.src = 'https://' + window['_fs_script'];
        y = n.getElementsByTagName(t)[0];
        y.parentNode.insertBefore(o, y);
        g.identify = function (i, v, s) {
          g(l, {uid: i}, s);
          if (v) g(l, v, s);
        };
        g.setUserVars = function (v, s) {
          g(l, v, s);
        };
        g.event = function (i, v, s) {
          g('event', {n: i, p: v}, s);
        };
        g.anonymize = function () {
          g.identify(!!0);
        };
        g.shutdown = function () {
          g('rec', !1);
        };
        g.restart = function () {
          g('rec', !0);
        };
        g.log = function (a, b) {
          g('log', [a, b]);
        };
        g.consent = function (a) {
          g('consent', !arguments.length || a);
        };
        g.identifyAccount = function (i, v) {
          o = 'account';
          v = v || {};
          v.acctId = i;
          g(o, v);
        };
        g.clearUserCookie = function () {};
        g.setVars = function (n, p) {
          g('setVars', [n, p]);
        };
        g._w = {};
        y = 'XMLHttpRequest';
        g._w[y] = m[y];
        y = 'fetch';
        g._w[y] = m[y];
        if (m[y])
          m[y] = function () {
            return g._w[y].apply(this, arguments);
          };
        g._v = '1.3.0';
      })(window, document, window['_fs_namespace'], 'script', 'user');
    }
  }, []);

  return null;
};

export function ErrorBoundary() {
  const error = useRouteError();
  /** @type {LoaderReturnData} */
  const rootData = useLoaderData();
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
          <div className="route-error">
            <h1>Oops</h1>
            <h2>{errorStatus}</h2>
            {errorMessage && (
              <fieldset>
                <pre>{errorMessage}</pre>
              </fieldset>
            )}
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
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */
