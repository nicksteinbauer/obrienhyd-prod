import {NavLink} from '@remix-run/react';

export default function NavLifeJackets({onClick}) {
  return (
    <ul className="obrien-nav-container__list">
      <li className="obrien-nav-container__list-item">
        <NavLink to="/collections/life-jackets-and-vests" onClick={onClick}>
          Life Jackets
        </NavLink>
      </li>
      <li className="obrien-nav-container__list-item">
        <NavLink
          to="/collections/mens-life-jackets-and-vests"
          onClick={onClick}
        >
          Men&apos;s
        </NavLink>
      </li>
      <li className="obrien-nav-container__list-item">
        <NavLink
          to="/collections/womens-life-jackets-and-vests"
          onClick={onClick}
        >
          Women&apos;s
        </NavLink>
      </li>
      <li className="obrien-nav-container__list-item">
        <NavLink
          to="/collections/kids-life-jackets-and-vests"
          onClick={onClick}
        >
          Kids&apos;
        </NavLink>
      </li>
      <li className="obrien-nav-container__list-item">
        <NavLink to="/collections/pet-life-jackets" onClick={onClick}>
          Pets
        </NavLink>
      </li>
      <li className="obrien-nav-container__list-item">
        <NavLink to="/collections/boat-safety" onClick={onClick}>
          Boat Safety
        </NavLink>
      </li>
      <li className="image-holder"></li>
    </ul>
  );
}
