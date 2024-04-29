import {NavLink} from '@remix-run/react';

export default function NavGear({onClick}) {
  return (
    <ul className="obrien-nav-container__list">
      <li className="obrien-nav-container__list-item">
        <NavLink to="/collections/more-gear" onClick={onClick}>
          More Gear
        </NavLink>
      </li>
      <li className="obrien-nav-container__list-item">
        <NavLink to="/collections/gloves" onClick={onClick}>
          Gloves
        </NavLink>
      </li>
      <li className="obrien-nav-container__list-item">
        <NavLink to="/collections/bags" onClick={onClick}>
          Bags
        </NavLink>
      </li>
      <li className="obrien-nav-container__list-item">
        <NavLink to="/collections/apparel" onClick={onClick}>
          Apparel
        </NavLink>
      </li>
      <li className="obrien-nav-container__list-item">
        <NavLink to="/collections/merchandise" onClick={onClick}>
          Merchandise
        </NavLink>
      </li>
      <li className="obrien-nav-container__list-item">
        <NavLink to="/collections/replacement-parts" onClick={onClick}>
          Replacement Parts
        </NavLink>
      </li>
      <li className="image-holder"></li>
    </ul>
  );
}
