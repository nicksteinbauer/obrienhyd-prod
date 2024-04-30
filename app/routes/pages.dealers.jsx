import {json} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';
import DealerList from '../components/obrien/DealerList';

/**
 * @type {MetaFunction<typeof loader>}
 */
export const meta = ({data}) => {
  return [{title: `O'Brien Watersports | ${data?.page.title ?? ''}`}];
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
  const iframe =
    '<div id="storelocatorwidget" class="dealers-page" style="width:100%;"><p>Loading <a href="https://www.storelocatorwidgets.com">Locator Software</a>...</p></div> <script type="text/javascript" src="//maps.googleapis.com/maps/api/js?key=AIzaSyBmuZ4dB6S3kpFgkUviSfAoP5h9QoH8Pbg&libraries=places"></script> <script type="text/javascript" id="storelocatorscript" data-uid="MKPAHXoXV568tSmJYOG1dMsHyOYmxF5t" data-settings="store_list_layout=Left" src="//cdn.storelocatorwidgets.com/widget/widget.js"></script>';

  return (
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
          <div
            dangerouslySetInnerHTML={{__html: iframe}}
            className="padd-vert-20"
          />
          <header className="secondHeader">
            <h2>Online Retailers</h2>
          </header>
          <DealerList />
        </div>
      </div>
    </div>
  );
}

const PAGE_QUERY = `#graphql
  query PageDealers(
    $language: LanguageCode,
    $country: CountryCode,
  )
  @inContext(language: $language, country: $country) {
    page(handle: "dealers") {
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
