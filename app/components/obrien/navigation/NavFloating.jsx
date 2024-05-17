import {NavLink} from '@remix-run/react';

export default function NavFloating(onClick) {
  return (
    <ul className="obrien-nav-container__list">
      <li className="obrien-nav-container__list-item">
        <NavLink to="/collections/floating" onClick={onClick}>
          Floating
        </NavLink>
      </li>
      <li className="obrien-nav-container__list-item">
        <NavLink to="/collections/party-floats" onClick={onClick}>
          Party Floats
        </NavLink>
      </li>
      <li className="obrien-nav-container__list-item">
        <NavLink to="/collections/foam-floats" onClick={onClick}>
          Foam Floats
        </NavLink>
      </li>
      <li className="obrien-nav-container__list-item">
        <NavLink to="/collections/pool-floats" onClick={onClick}>
          Pool Floats
        </NavLink>
      </li>
      <li className="obrien-nav-container__list-item">
        <NavLink to="/collections/float-accessories" onClick={onClick}>
          Accessories
        </NavLink>
      </li>
      <li className="image-holder"></li>
    </ul>
  );
}
