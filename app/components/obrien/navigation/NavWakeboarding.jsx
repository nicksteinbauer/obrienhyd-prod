import {NavLink} from '@remix-run/react';

export default function NavWakeboarding({onClick}) {
  return (
    <ul className="obrien-nav-container__list">
      <li className="obrien-nav-container__list-item">
        <NavLink to="/collections/wakeboarding" onClick={onClick}>
          Wakeboarding
        </NavLink>
      </li>
      <li className="obrien-nav-container__list-item">
        <NavLink to="/collections/wakeboards" onClick={onClick}>
          Wakeboards
        </NavLink>
      </li>
      <li className="obrien-nav-container__list-item">
        <NavLink to="/collections/wakeboard-bindings" onClick={onClick}>
          Wake Bindings
        </NavLink>
      </li>
      <li className="obrien-nav-container__list-item">
        <NavLink to="/collections/wakeboard-ropes" onClick={onClick}>
          Wake Ropes
        </NavLink>
      </li>
      <li className="obrien-nav-container__list-item">
        <NavLink to="/collections/wakeboard-accessories" onClick={onClick}>
          Accessories
        </NavLink>
      </li>
      <li className="image-holder"></li>
    </ul>
  );
}
