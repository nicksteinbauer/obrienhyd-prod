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
      'https://config.gorgias.chat/',
      'https://assets.gorgias.chat/',
      'http://maps.googleapis.com/',
      'http://cdn.storelocatorwidgets.com/',
      'http://ajax.googleapis.com/',
      'http://loc.storelocatorwidgets.com/',
      'http://maps.gstatic.com/',
      'http://maps.gstatic.com/',
      'https://maxcdn.bootstrapcdn.com/',
    ],
    connectSrc: [
      "'self'",
      'https://config.gorgias.chat/',
      'http://maps.googleapis.com/',
      'https://log.storelocatorwidgets.com',
    ],
    frameSrc: [
      "'self'",
      'https://www.youtube.com/',
      'https://player.vimeo.com',
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
