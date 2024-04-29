import {NavLink} from '@remix-run/react';

export default function NavRopes({onClick}) {
  return (
    <ul className="obrien-nav-container__list">
      <li className="obrien-nav-container__list-item">
        <NavLink to="/collections/tow-ropes" onClick={onClick}>
          Tow Ropes
        </NavLink>
      </li>
      <li className="obrien-nav-container__list-item">
        <NavLink to="/collections/ropes-and-handles" onClick={onClick}>
          Ropes &amp; Handles
        </NavLink>
      </li>
      <li className="obrien-nav-container__list-item">
        <NavLink to="/collections/tube-ropes" onClick={onClick}>
          Tube Ropes
        </NavLink>
      </li>
      <li className="obrien-nav-container__list-item">
        <NavLink to="/collections/rope-accessories" onClick={onClick}>
          Accessories
        </NavLink>
      </li>
      <li className="image-holder"></li>
    </ul>
  );
}
