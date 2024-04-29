import {NavLink} from '@remix-run/react';

export default function NavWakesurfing({onClick}) {
  return (
    <ul className="obrien-nav-container__list">
      <li className="obrien-nav-container__list-item">
        <NavLink to="/collections/wakesurfing" onClick={onClick}>
          Wakesurfing
        </NavLink>
      </li>
      <li className="obrien-nav-container__list-item">
        <NavLink to="/collections/wakesurf-boards" onClick={onClick}>
          Wakesurf Boards
        </NavLink>
      </li>
      <li className="obrien-nav-container__list-item">
        <NavLink to="/collections/wakesurf-ropes" onClick={onClick}>
          Surf Ropes
        </NavLink>
      </li>
      <li className="obrien-nav-container__list-item">
        <NavLink to="/collections/wakesurf-accessories" onClick={onClick}>
          Accessories
        </NavLink>
      </li>
      <li className="image-holder"></li>
    </ul>
  );
}
