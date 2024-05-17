import {NavLink} from '@remix-run/react';

export default function NavMargaritavilleDesktop(onClick) {
  return (
    <>
      <ul className="obrien-nav-container__list">
        <li className="obrien-nav-container__list-item">
          <NavLink
            to="/collections/margaritaville-pool-floats"
            onClick={onClick}
          >
            Pool Floats
          </NavLink>
        </li>
        <li className="obrien-nav-container__list-item">
          <NavLink
            to="/collections/margaritaville-inflatable-pool-floats"
            onClick={onClick}
          >
            Inflatable Pool Floats
          </NavLink>
        </li>
        <li className="obrien-nav-container__list-item">
          <NavLink
            to="/collections/margaritaville-foam-pool-floats"
            onClick={onClick}
          >
            Foam Pool Floats
          </NavLink>
        </li>
      </ul>
      <ul className="obrien-nav-container__list">
        <li className="obrien-nav-container__list-item">
          <NavLink
            to="/collections/margaritaville-stand-up-paddleboards"
            onClick={onClick}
          >
            Stand Up Paddleboards
          </NavLink>
        </li>
      </ul>
      <ul className="obrien-nav-container__list">
        <li className="obrien-nav-container__list-item">
          <NavLink
            to="/collections/margaritaville-life-jackets"
            onClick={onClick}
          >
            Life Jackets
          </NavLink>
        </li>
      </ul>
      <ul className="obrien-nav-container__list">
        <li className="obrien-nav-container__list-item">
          <NavLink to="/collections/landshark-products" onClick={onClick}>
            LandShark Products
          </NavLink>
        </li>
      </ul>
    </>
  );
}
