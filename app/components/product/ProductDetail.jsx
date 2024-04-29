import {Link} from 'react-scroll';
import {ProductForm} from '~/components';

export function ProductDetail({content, heading}) {
  return (
    <>
      <div className="thirty contentBoxContainer flex-vertical">
        <section className="contentBox">
          <h1 className="padding">{heading}</h1>
          <div className="priceFix padding">
            <ProductForm heading={heading} />
            <div className="fixySize">
              <div
                className="buyBoxHTML"
                dangerouslySetInnerHTML={{__html: content}}
              />
              <Link className="linky" to="tabs">
                Read More
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
