import {useLoaderData, NavLink, Link} from '@remix-run/react';
import {Image} from '@shopify/hydrogen';
import Hero from '../components/Hero/Hero';
// import LineDrawing from '../components/Hero/LineDrawing';
// import heroimg from '../../public/HeroTest.jpg';
import {RichTextRenderer} from '@novatize-mattheri/shopify-richtext-renderer';

/**
 * @type {MetaFunction}
 */
export const meta = () => {
  return [{title: 'Aquaglide Aquaparks & Lakefront Play Structures | Home'}];
};

/**
 * @param {LoaderFunctionArgs}
 */
export async function loader({context}) {
  return await context.storefront.query(HOME_QUERY);
}

export default function Homepage() {
  /** @type {LoaderReturnData} */
  const {pages} = useLoaderData();

  return (
    <main className="home">
      <HomePage pages={pages} />
    </main>
  );
}

// Render the fetched data in the React component
function HomePage({pages}) {
  return (
    <div>
      {pages.nodes.map((page) => {
        return <HomePageHero page={page} key={page.id} />;
      })}
    </div>
  );
}

function HomePageHero({page}) {
  const homeHero = page.homehero?.reference?.image
    ? page.homehero?.reference?.image
    : null;
  const featuredImage1 = page.featuredimage1?.reference?.image
    ? page.featuredimage1?.reference?.image
    : null;
  const featuredTitle1 = page.featuredtitle1?.value
    ? page.featuredtitle1?.value
    : null;
  const featuredContent1 = page.featuredcontent1?.value
    ? page.featuredcontent1?.value
    : null;
  const featuredLink1 = page.featuredlink1?.value
    ? page.featuredlink1?.value
    : null;
  const featuredLink1Text = page.featuredlink1text?.value
    ? page.featuredlink1text?.value
    : null;
  const featuredImage2 = page.featuredimage2?.reference?.image
    ? page.featuredimage2?.reference?.image
    : null;
  const featuredTitle2 = page.featuredtitle2?.value
    ? page.featuredtitle2?.value
    : null;
  const featuredContent2 = page.featuredcontent2?.value
    ? page.featuredcontent2?.value
    : null;
  const featuredLink2 = page.featuredlink2?.value
    ? page.featuredlink2?.value
    : null;
  const featuredLink2Text = page.featuredlink2text?.value
    ? page.featuredlink2text?.value
    : null;

  return (
    <div>
      <Hero homeHero={homeHero} />
      <section id="underHome" className="underHome">
        <div className="underHomeLine inside-sm">
          <div className="underHomeLineActual" />
        </div>
        <div className="inside-xxl flex-sm fullLine noGap">
          <div className="underHomeInd always-flex">
            <div className="filler" />
            <div className="underHomeLineActualSmall" />
            <div className="filler topLine" />
          </div>
          <div className="underHomeInd always-flex noGap">
            <div className="filler topLine" />
            <div className="underHomeLineActualSmall" />
            <div className="filler" />
          </div>
        </div>
        <div className="inside-xxl flex-sm pushUp">
          <div className="underHomeInd fifty">
            <Image
              data={featuredImage1}
              sizes="(min-width: 45em) 50vw, 100vw"
            />
            <div className="underHomeIndContent">
              <div className="titleContainer text-center">
                <h3>{featuredTitle1}</h3>
              </div>
              <div className="content">
                <RichTextRenderer data={featuredContent1} />
              </div>
              <div className="buttonContainer text-center">
                <Link className="button" to={featuredLink1}>
                  {featuredLink1Text}
                </Link>
              </div>
            </div>
          </div>
          <div className="underHomeInd fifty">
            <Image
              data={featuredImage2}
              sizes="(min-width: 45em) 50vw, 100vw"
            />
            <div className="underHomeIndContent">
              <div className="titleContainer text-center">
                <h3>{featuredTitle2}</h3>
              </div>
              <div className="content">
                <RichTextRenderer data={featuredContent2} />
              </div>
              <div className="buttonContainer text-center">
                <Link className="button" to={featuredLink2}>
                  {featuredLink2Text}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const HOME_QUERY = `#graphql
  query FeaturedPages {
    pages(query: "home", first: 1) {
      nodes {
        id
        title
        handle
        homehero: metafield(namespace: "custom", key: "home_hero") {
          value
          reference {
            ... on MediaImage {
              id
              image {
                height
                url
                width
                altText
              }
            }
          }
        }
        featuredimage1: metafield(namespace: "custom", key: "featured_image_1") {
          value
          reference {
            ... on MediaImage {
              id
              image {
                height
                url
                width
                altText
              }
            }
          }
        }
        featuredtitle1: metafield(namespace: "custom", key: "featured_title_1") {
          value
        }
        featuredcontent1: metafield(namespace: "custom", key: "featured_content_1") {
          value
        }
        featuredlink1text: metafield(namespace: "custom", key: "featured_link_1_text") {
          value
        }
        featuredlink1: metafield(namespace: "custom", key: "featured_link_1") {
          value
        }
        featuredimage2: metafield(namespace: "custom", key: "featured_image_2") {
          value
          reference {
            ... on MediaImage {
              id
              image {
                height
                url
                width
                altText
              }
            }
          }
        }
        featuredtitle2: metafield(namespace: "custom", key: "featured_title_2") {
          value
        }
        featuredcontent2: metafield(namespace: "custom", key: "featured_content_2") {
          value
        }
        featuredlink2text: metafield(namespace: "custom", key: "featured_link_2_text") {
          value
        }
        featuredlink2: metafield(namespace: "custom", key: "featured_link_2") {
          value
        }
      }
    }
  }
`;
