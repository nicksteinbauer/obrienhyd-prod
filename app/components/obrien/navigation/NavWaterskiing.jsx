import {NavLink} from '@remix-run/react';

export default function NavWaterskiing({onClick}) {
  return (
    <ul className="obrien-nav-container__list">
      <li className="obrien-nav-container__list-item">
        <NavLink to="/collections/water-skiing" onClick={onClick}>
          Waterskiing
        </NavLink>
      </li>
      <li className="obrien-nav-container__list-item">
        <NavLink to="/collections/water-skis" onClick={onClick}>
          Waterskis
        </NavLink>
      </li>
      <li className="obrien-nav-container__list-item">
        <NavLink to="/collections/water-ski-bindings" onClick={onClick}>
          Ski Bindings
        </NavLink>
      </li>
      <li className="obrien-nav-container__list-item">
        <NavLink to="/collections/water-ski-ropes" onClick={onClick}>
          Ski Ropes
        </NavLink>
      </li>
      <li className="obrien-nav-container__list-item">
        <NavLink to="/collections/water-ski-accessories" onClick={onClick}>
          Accessories
        </NavLink>
      </li>
      <li className="image-holder"></li>
    </ul>
  );
}
