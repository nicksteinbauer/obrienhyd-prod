import {NavLink} from '@remix-run/react';

export default function SupportMenu({onClick}) {
  return (
    <>
      <h4>Support</h4>
      <ul className="aquapark-nav-container__list">
        <li className="aquapark-nav-container__list-item">
          <NavLink to="/why/contact-us" onClick={onClick}>
            Contact
          </NavLink>
        </li>
        <li className="aquapark-nav-container__list-item">
          <NavLink to="/why/support-center" onClick={onClick}>
            Support Center
          </NavLink>
        </li>
        <li className="aquapark-nav-container__list-item">
          <NavLink to="/why/support-center" onClick={onClick}>
            Media &amp; Catalogs
          </NavLink>
        </li>
        <li className="aquapark-nav-container__list-item">
          <NavLink to="/why/support-center" onClick={onClick}>
            Privacy
          </NavLink>
        </li>
        <li className="aquapark-nav-container__list-item">
          <NavLink to="/why/support-center" onClick={onClick}>
            Terms &amp; Conditions
          </NavLink>
        </li>
        <li className="image-holder"></li>
      </ul>
    </>
  );
}
