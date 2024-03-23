import {NavLink} from '@remix-run/react';

export default function NavFooterMenu({onClick}) {
  return (
    <ul className="nav-footer-container__list always-flex">
      <li className="nav-footer-container__list-item">
        <NavLink to="/contact" onClick={onClick}>
          Contact Us
        </NavLink>
      </li>
      <li className="nav-footer-container__list-item">
        <NavLink to="/warranty" onClick={onClick}>
          Warranty
        </NavLink>
      </li>
      <li className="nav-footer-container__list-item">
        <NavLink to="/help-center" onClick={onClick}>
          Help Center
        </NavLink>
      </li>
    </ul>
  );
}
