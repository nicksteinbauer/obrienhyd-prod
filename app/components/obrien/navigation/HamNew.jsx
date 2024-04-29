import {useState} from 'react';

import MobileNav from './MobileNav';

export default function HamNew() {
  const [MobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <div className={MobileMenu ? 'hamburger active' : 'hamburger'}>
        <div
          className="ham-trigger flex-vertical"
          onClick={() => setMobileMenu(!MobileMenu)}
          onKeyDown={() => setMobileMenu(!MobileMenu)}
          role="button"
          tabIndex="0"
        >
          <div className={MobileMenu ? 'ham-button active' : 'ham-button'}>
            <span className="line line-1"></span>
            <span className="line line-2"></span>
            <span className="line line-3"></span>
          </div>
        </div>
      </div>

      {MobileMenu && <MobileNav onClick={() => setMobileMenu(!MobileMenu)} />}
    </>
  );
}

// function MobileTest() {
//   return (
//     <div className="whattheshit">
//       What the hell is going on
//       <h1>I hate this</h1>
//     </div>
//   );
// }
