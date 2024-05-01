import {Image} from '@shopify/hydrogen';
import {Link} from 'react-scroll';
import ScrollerGif from 'public/scroller.gif';

export default function Scroller() {
  return (
    <div className="scroller text-center">
      <Link to="new2024">
        <div>
          <Image
            src={ScrollerGif}
            alt="Scroll Down"
            width={36}
            height={74.48}
          />
        </div>
      </Link>
    </div>
  );
}
