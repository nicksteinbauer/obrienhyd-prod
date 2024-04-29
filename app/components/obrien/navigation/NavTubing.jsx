import {NavLink} from '@remix-run/react';

export default function NavTubing({onClick}) {
  return (
    <ul className="obrien-nav-container__list">
      <li className="obrien-nav-container__list-item">
        <NavLink to="/collections/tubing" onClick={onClick}>
          Tubing
        </NavLink>
      </li>
      <li className="obrien-nav-container__list-item">
        <NavLink to="/collections/towable-tubes" onClick={onClick}>
          Tubes
        </NavLink>
      </li>
      <li className="obrien-nav-container__list-item">
        <NavLink to="/collections/tube-ropes" onClick={onClick}>
          Tube Ropes
        </NavLink>
      </li>
      <li className="obrien-nav-container__list-item">
        <NavLink to="/collections/tube-accessories" onClick={onClick}>
          Accessories
        </NavLink>
      </li>
      <li className="image-holder"></li>
    </ul>
  );
}
