import clsx from 'clsx';
import {
  flattenConnection,
  Image,
  Link,
  Money,
  useMoney,
} from '@shopify/hydrogen';

import {Text} from '~/components';
import {isDiscounted, isNewArrival} from '~/lib/utils';
import {getProductPlaceholder} from '~/lib/placeholders';

export function ProductCard({product, label, className, loading, onClick}) {
  let cardLabel;

  const cardData = product?.variants ? product : getProductPlaceholder();

  const {
    image,
    priceV2: price,
    compareAtPriceV2: compareAtPrice,
  } = flattenConnection(cardData?.variants)[0] || {};

  if (label) {
    cardLabel = label;
  } else if (isDiscounted(price, compareAtPrice)) {
    cardLabel = '<span>Sale</span>';
  } else if (isNewArrival(product.publishedAt)) {
    cardLabel = '<span>New</span>';
  }

  const styles = clsx('grid gap-6', className);

  const onClickHanlder = () => {
    window.location.reload();
    onClick();
  };

  return (
    <Link onClick={onClickHanlder} to={`/products/${product.handle}`}>
      <div className={styles}>
        <div className="card-image">
          <Text as="label" size="fine" className="text-right text-notice">
            <span
              className="newLabel"
              dangerouslySetInnerHTML={{__html: cardLabel}}
            />
            {product.totalInventory < 1 && (
              <span className="outOfStock">Out of Stock</span>
            )}
          </Text>
          {image && (
            <Image
              className=""
              widths={[400]}
              sizes="400px"
              loaderOptions={{
                crop: 'center',
                scale: 2,
                width: 400,
                height: 400,
              }}
              data={image}
              alt={image.altText || `Picture of ${product.title}`}
              loading={loading}
            />
          )}
        </div>
        <div className="textArea justify">
          <Text className="" as="h3">
            {product.title}
          </Text>
          <div className="price">
            <Money withoutTrailingZeros data={price} />
            {isDiscounted(price, compareAtPrice) && (
              <CompareAtPrice className={'opacity-50'} data={compareAtPrice} />
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

function CompareAtPrice({data, className}) {
  const {currencyNarrowSymbol, withoutTrailingZerosAndCurrency} =
    useMoney(data);

  const styles = clsx('strike', className);

  return (
    <span className={styles}>
      {currencyNarrowSymbol}
      {withoutTrailingZerosAndCurrency}
    </span>
  );
}
