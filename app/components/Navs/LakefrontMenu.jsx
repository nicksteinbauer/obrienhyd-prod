import {NavLink} from '@remix-run/react';

export default function LakeFrontMenu({onClick}) {
  return (
    <>
      <h4>Lakefront Play Structures</h4>
      <ul className="aquapark-nav-container__list">
        <li className="aquapark-nav-container__list-item">
          <NavLink to="/collections/lakefront-mini-parks" onClick={onClick}>
            Lakefront Mini Parks
          </NavLink>
        </li>
        <li className="aquapark-nav-container__list-item">
          <NavLink
            to="/collections/lakefront-bouncers-and-trampolines"
            onClick={onClick}
          >
            Bouncers &amp; Trampolines
          </NavLink>
        </li>
        <li className="aquapark-nav-container__list-item">
          <NavLink to="/collections/lakefront-lounges" onClick={onClick}>
            Lounges
          </NavLink>
        </li>
        <li className="aquapark-nav-container__list-item">
          <NavLink
            to="/collections/lakefront-parts-and-accessories"
            onClick={onClick}
          >
            Parts &amp; Accessories
          </NavLink>
        </li>
        <li className="image-holder"></li>
      </ul>
    </>
  );
}
