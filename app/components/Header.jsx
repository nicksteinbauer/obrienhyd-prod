import {NavLink} from '@remix-run/react';

import Logo from './obrien/Logo';

import DesktopNav from './obrien/navigation/DesktopNav';
import SearchLogo from './logos/SearchLogo.jsx';

import HamNew from './obrien/navigation/HamNew';

// import {
//   PredictiveSearchForm,
//   PredictiveSearchResults,
// } from '~/components/Search';

/**
 * @param {HeaderProps}
 */
export function Header({header, isLoggedIn, cart}) {
  return (
    <header className={`wholeHeader`}>
      <div role="banner" className={`always-flex justify topHeader`}>
        <div className="flex-vertical promo-banner">
          <span>
            Direct Web Sales Available for US Residents in the lower 48 States
          </span>
        </div>
        <NavLink
          prefetch="intent"
          to="/cart"
          end
          className="cartIcon flex-vertical"
        >
          <CartBadge />
        </NavLink>
      </div>
      <div className="navigate lowerHeader justify always-flex">
        <Logo />
        <HamNew />
        <DesktopNav />
        <div className="flex-vertical obrienSearchContainer">
          <form action={`/search`} className="obrienSearch">
            <input
              className="search"
              type="search"
              placeholder="Search"
              name="q"
            />
            <button type="submit" className="iconSearch">
              <SearchLogo />
            </button>
          </form>
        </div>
      </div>
      <span className="secondTrigger">secondTrigger</span>
    </header>
  );
}

function IconBag() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="iconBag"
    >
      <title>Bag</title>
      <path
        fillRule="evenodd"
        d="M8.125 5a1.875 1.875 0 0 1 3.75 0v.375h-3.75V5Zm-1.25.375V5a3.125 3.125 0 1 1 6.25 0v.375h3.5V15A2.625 2.625 0 0 1 14 17.625H6A2.625 2.625 0 0 1 3.375 15V5.375h3.5ZM4.625 15V6.625h10.75V15c0 .76-.616 1.375-1.375 1.375H6c-.76 0-1.375-.616-1.375-1.375Z"
      />
    </svg>
  );
}

/**
 * @param {{count: number}}
 */
function CartBadge({count}) {
  return (
    <div className="cartIcon flex-vertical">
      <IconBag />
      <span className="count flex-vertical">
        <span>{count}</span>
      </span>
    </div>
  );
}

// function SearchAside() {
//   return (
//     <aside id="search-aside">
//       <div className="predictive-search">
//         <br />
//         <PredictiveSearchForm>
//           {({fetchResults, inputRef}) => (
//             <div>
//               <input
//                 name="q"
//                 onChange={fetchResults}
//                 onFocus={fetchResults}
//                 placeholder="Search"
//                 ref={inputRef}
//                 type="search"
//               />
//               &nbsp;
//               <button
//                 onClick={() => {
//                   window.location.href = inputRef?.current?.value
//                     ? `/search?q=${inputRef.current.value}`
//                     : `/search`;
//                 }}
//               >
//                 Search
//               </button>
//             </div>
//           )}
//         </PredictiveSearchForm>
//         <PredictiveSearchResults />
//       </div>
//     </aside>
//   );
// }
