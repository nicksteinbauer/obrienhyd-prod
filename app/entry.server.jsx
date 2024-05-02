import {RemixServer} from '@remix-run/react';
import isbot from 'isbot';
import {renderToReadableStream} from 'react-dom/server';
import {createContentSecurityPolicy} from '@shopify/hydrogen';

/**
 * @param {Request} request
 * @param {number} responseStatusCode
 * @param {Headers} responseHeaders
 * @param {EntryContext} remixContext
 */
export default async function handleRequest(
  request,
  responseStatusCode,
  responseHeaders,
  remixContext,
) {
  const {nonce, header, NonceProvider} = createContentSecurityPolicy({
    defaultSrc: [
      "'self'",
      'https://cdn.shopify.com',
      'https://some-custom-css.cdn',
      'https://shopify.com',
      'http://localhost:*',
      'https://www.youtube.com/',
      'https://fonts.gstatic.com',
      'https://storage.googleapis.com6-',
      'https://storage.googleapis.com6-',
      'https://us-east1-898b.gorgias.chat5-',
      'http://maps.googleapis.com/',
      'http://cdn.storelocatorwidgets.com/',
      'http://ajax.googleapis.com/',
      'http://loc.storelocatorwidgets.com/',
      'http://maps.gstatic.com/',
      'http://maps.gstatic.com/',
      'https://maxcdn.bootstrapcdn.com/',
      'https://assets.gorgias.chat/',
      'http://maxcdn.bootstrapcdn.com/',
      'data:',
    ],
    connectSrc: [
      "'self'",
      'https://config.gorgias.chat/',
      'http://maps.googleapis.com/',
      'https://log.storelocatorwidgets.com',
      'https://us-east1-898b.gorgias.chat/',
      'wss://us-east1-898b.gorgias.chat/',
      'https://api2.amplitude.com/',
      'https://analytics.google.com/',
      'https://stats.g.doubleclick.net/',
    ],
    frameSrc: [
      "'self'",
      'https://www.youtube.com/',
      'https://player.vimeo.com',
      'https://www.google.com/',
      'https://user-92916592834.cld.bz',
      'https://td.doubleclick.net/',
    ],
    scriptSrc: [
      "'self'",
      "'unsafe-inline'",
      'https://config.gorgias.chat/bundle-loader/01HKTCXXVCJSJGNZNH55W29XD4',
      'http://maps.googleapis.com/',
      'http://cdn.storelocatorwidgets.com/',
      'http://localhost:3100',
      'http://ajax.googleapis.com/',
      'http://loc.storelocatorwidgets.com/',
      'https://config.gorgias.chat/',
      'https://assets.gorgias.chat/',
      'https://config.gorgias.chat2-',
      'https://assets.gorgias.chat3-',
      'https://config.gorgias.io4-',
      'https://us-east1-898b.gorgias.chat/',
      'https://polyfill.io/',
      'https://www.google.com/',
      'https://www.gstatic.com/',
      'https://f.vimeocdn.com/',
      'https://www.google.com/',
    ],
    scriptSrcElem: [
      "'self'",
      "'unsafe-inline'",
      'https://config.gorgias.chat/',
      'https://assets.gorgias.chat/',
      'https://polyfill.io/',
      'http://localhost:3100/',
      'https://www.google.com/',
      'https://cdn.shopify.com/',
      'https://www.gstatic.com/',
      'https://cdn.amplitude.com/',
      'https://cdn.storelocatorwidgets.com/',
      'http://cdn.storelocatorwidgets.com/',
      'https://ajax.googleapis.com/',
      'http://maps.googleapis.com/',
      'http://ajax.googleapis.com/',
      'http://loc.storelocatorwidgets.com/',
      'https://obrien.us6.list-manage.com/',
      'https://www.googletagmanager.com/',
      'https://googleads.g.doubleclick.net/',
    ],
    scriptSrcAttr: ["'self'", "'unsafe-inline'"],
    imgSrc: [
      "'self'",
      'data:',
      'https://assets.gorgias.chat/',
      'http://localhost:3100/',
      'https://cdn.shopify.com/',
      'http://maps.gstatic.com/',
      'https://www.google.com/',
      'https://config.gorgias.io/',
    ],
    styleSrc: [
      "'self'",
      "'unsafe-inline'",
      'https://fonts.googleapis.com/',
      'https://fonts.gstatic.com',
      'http://maxcdn.bootstrapcdn.com/',
      'http://cdn.storelocatorwidgets.com/',
      'http://fonts.googleapis.com/',
    ],
  });

  const body = await renderToReadableStream(
    <NonceProvider>
      <RemixServer context={remixContext} url={request.url} />
    </NonceProvider>,
    {
      nonce,
      signal: request.signal,
      onError(error) {
        // eslint-disable-next-line no-console
        console.error(error);
        responseStatusCode = 500;
      },
    },
  );

  if (isbot(request.headers.get('user-agent'))) {
    await body.allReady;
  }

  responseHeaders.set('Content-Type', 'text/html');
  responseHeaders.set('Content-Security-Policy', header);

  return new Response(body, {
    headers: responseHeaders,
    status: responseStatusCode,
  });
}

/** @typedef {import('@shopify/remix-oxygen').EntryContext} EntryContext */
