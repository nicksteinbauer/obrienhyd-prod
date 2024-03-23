import {Await, NavLink} from '@remix-run/react';
import {Suspense, useState} from 'react';
import AGLogo from '../Logos/AGLogo';
import AquaglideLogo from '../Logos/AquaglideLogo';

import DesktopNav from '../Navs/DesktopNav';
//import SearchLogo from '../Logos/SearchLogo';
import BagLogo from '../Logos/BagLogo';
//import NewSearch from './NewSearch';
import SearchLogo from '../Logos/SearchLogo';
import CloseLogo from '../Logos/CloseLogo';
import MobileNav from '../Navs/MobileNav';
import ContactLink from './ContactLink';

import {useClickAway} from '@uidotdev/usehooks';

/**
 * @param {HeaderProps}
 */
export function HeaderAquaglide({header, isLoggedIn, cart}) {
  const {menu} = header;
  const [AquaparkMenu, setAquaparkMenu] = useState(false);
  const [LakefrontMenu, setLakefrontMenu] = useState(false);
  const [WhyMenu, setWhyMenu] = useState(false);

  const [navigate, setNavigate] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavigate(true);
    } else {
      setNavigate(false);
    }
  };
  if (typeof window !== `undefined`) {
    window.addEventListener('scroll', changeBackground);
  }

  const [searchToggled, setSearchToggled] = useState(false);
  const toggle = () => {
    setSearchToggled(!searchToggled);
  };

  const [MobileMenu, setMobileMenu] = useState(false);
  // const mobileToggle = () => {
  //   setMobileMenu(!MobileMenu);
  // };

  return (
    <div className={navigate ? 'headerContainer active' : 'headerContainer'}>
      <header
        className={`header ${
          AquaparkMenu ||
          LakefrontMenu ||
          WhyMenu ||
          searchToggled ||
          MobileMenu
            ? 'switcheroo'
            : ''
        }`}
      >
        <div className="heightFix">
          <div className="heightFixUnder always-flex justify inside-xl">
            <HeaderMenu
              menu={menu}
              viewport="desktop"
              primaryDomainUrl={header.shop.primaryDomain.url}
              AquaparkMenu={AquaparkMenu}
              setAquaparkMenu={setAquaparkMenu}
              LakefrontMenu={LakefrontMenu}
              setLakefrontMenu={setLakefrontMenu}
              WhyMenu={WhyMenu}
              setWhyMenu={setWhyMenu}
            />
            <HeaderMenuMobileToggle
              MobileMenu={MobileMenu}
              setMobileMenu={setMobileMenu}
            />
            <div className="flexFiller" />
            <div className="flex-vertical logoTogether">
              <NavLink
                prefetch="intent"
                to="/"
                end
                className="logoContainer"
                //onClick={() => setMobileMenu(!MobileMenu)}
              >
                {/* <strong>{shop.name}</strong> */}
                <AGLogo />
                <AquaglideLogo />
              </NavLink>
            </div>
            <div className="flexFiller" />
            <HeaderCtas
              setSearchToggled={setSearchToggled}
              searchToggled={searchToggled}
              toggle={toggle}
              isLoggedIn={isLoggedIn}
              cart={cart}
              MobileMenu={MobileMenu}
              setMobileMenu={setMobileMenu}
            />
          </div>
        </div>
        <div className="bottomLine" />
      </header>
    </div>
  );
}

/**
 * @param {{
 *   menu: HeaderProps['header']['menu'];
 *   primaryDomainUrl: HeaderQuery['shop']['primaryDomain']['url'];
 *   viewport: Viewport;
 * }}
 */
export function HeaderMenu({
  // menu,
  // primaryDomainUrl,
  viewport,
  AquaparkMenu,
  setAquaparkMenu,
  LakefrontMenu,
  setLakefrontMenu,
  WhyMenu,
  setWhyMenu,
}) {
  const className = `header-menu-${viewport}`;

  function closeAside(event) {
    if (viewport === 'mobile') {
      event.preventDefault();
      window.location.href = event.currentTarget.href;
    }
  }

  return (
    <nav className={className} role="navigation">
      {viewport === 'mobile' && (
        <NavLink
          end
          onClick={closeAside}
          prefetch="intent"
          // style={activeLinkStyle}
          to="/"
        >
          Home
        </NavLink>
      )}

      <DesktopNav
        AquaparkMenu={AquaparkMenu}
        setAquaparkMenu={setAquaparkMenu}
        LakefrontMenu={LakefrontMenu}
        setLakefrontMenu={setLakefrontMenu}
        WhyMenu={WhyMenu}
        setWhyMenu={setWhyMenu}
      />
    </nav>
  );
}

/**
 * @param {Pick<HeaderProps, 'isLoggedIn' | 'cart'>}
 */
function HeaderCtas({
  //isLoggedIn,
  cart,
  setSearchToggled,
  searchToggled,
  toggle,
  // MobileMenu,
  // setMobileMenu,
}) {
  return (
    <nav className="aqNav always-flex" role="navigation">
      <div className="flexFiller" />
      <NewSearch
        setSearchToggled={setSearchToggled}
        searchToggled={searchToggled}
        toggle={toggle}
      />
      <CartToggle cart={cart} />
      <ContactLink />
    </nav>
  );
}

function HeaderMenuMobileToggle({MobileMenu, setMobileMenu}) {
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

// Begin Nick's NewSearch
function NewSearch({toggle, searchToggled, setSearchToggled}) {
  const ref = useClickAway(() => {
    setSearchToggled(false);
  });
  return (
    <div className="searchIcon flex-vertical">
      <button className="noStyles" onClick={toggle}>
        {!searchToggled && <SearchLogo />}
        {searchToggled && <CloseLogo />}
        <span className="hideAway">Search</span>
      </button>
      {searchToggled && (
        <div ref={ref}>
          <ToggledComponent />
        </div>
      )}
    </div>
  );
}

function ToggledComponent() {
  return (
    <div className="newSearch">
      <div className="submenuJump">
        <div className="subLine" />
        <div className="inside-md">
          <div className="backGray">
            <form action={`/search`} className="obrienSearch always-flex">
              <input
                className="search"
                type="search"
                placeholder="Search"
                name="q"
              />
              <button type="submit" className="iconSearch">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
// End Nick's NewSearch

/**
 * @param {{count: number}}
 */
function CartBadge({count}) {
  return (
    <div className="cartIcon flex-vertical">
      <a href="#cart-aside" className="always-flex">
        <BagLogo />
        <span className="count flex-vertical">
          <span>{count}</span>
        </span>
      </a>
    </div>
  );
}

/**
 * @param {Pick<HeaderProps, 'cart'>}
 */
function CartToggle({cart}) {
  return (
    <Suspense fallback={<CartBadge count={0} />}>
      <Await resolve={cart}>
        {(cart) => {
          if (!cart) return <CartBadge count={0} />;
          return <CartBadge count={cart.totalQuantity || 0} />;
        }}
      </Await>
    </Suspense>
  );
}

/**
 * @param {{
 *   isActive: boolean;
 *   isPending: boolean;
 * }}
 */
// function activeLinkStyle({isActive, isPending}) {
//   return {
//     fontWeight: isActive ? 'bold' : undefined,
//     color: isPending ? 'grey' : 'black',
//   };
// }

/** @typedef {Pick<LayoutProps, 'header' | 'cart' | 'isLoggedIn'>} HeaderProps */
/** @typedef {'desktop' | 'mobile'} Viewport */

/** @typedef {import('storefrontapi.generated').HeaderQuery} HeaderQuery */
/** @typedef {import('./Layout').LayoutProps} LayoutProps */
