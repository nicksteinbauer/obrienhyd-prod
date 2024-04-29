import {NavLink} from '@remix-run/react';

export default function NavSupport({onClick}) {
  return (
    <ul className="obrien-nav-container__list">
      <li className="obrien-nav-container__list-item">
        <NavLink to="/pages/catalog" onClick={onClick}>
          Product Catalog
        </NavLink>
      </li>
      <li className="obrien-nav-container__list-item">
        <NavLink to="/pages/about" onClick={onClick}>
          About Us
        </NavLink>
      </li>
      <li className="obrien-nav-container__list-item">
        <NavLink to="/pages/contact" onClick={onClick}>
          Contact Us
        </NavLink>
      </li>
      <li className="obrien-nav-container__list-item">
        <NavLink to="/pages/warranty" onClick={onClick}>
          Warranty &amp; Claims
        </NavLink>
      </li>
      <li className="obrien-nav-container__list-item">
        <NavLink to="/pages/returns" onClick={onClick}>
          Returns
        </NavLink>
      </li>
      <li className="obrien-nav-container__list-item">
        <NavLink to="/pages/registration" onClick={onClick}>
          Product Registration
        </NavLink>
      </li>
      <li className="obrien-nav-container__list-item">
        <NavLink to="/pages/faqs" onClick={onClick}>
          FAQ&apos;s
        </NavLink>
      </li>
      <li className="obrien-nav-container__list-item">
        <NavLink to="/pages/size-charts" onClick={onClick}>
          Size Charts
        </NavLink>
      </li>
      <li className="obrien-nav-container__list-item">
        <NavLink
          to="/pages/owners-manuals-safety-information"
          onClick={onClick}
        >
          Manuals &amp; Safety
        </NavLink>
      </li>
      <li className="obrien-nav-container__list-item">
        <NavLink reloadDocument="true" to="/pages/dealers" onClick={onClick}>
          Dealers
        </NavLink>
      </li>
      <li className="obrien-nav-container__list-item">
        <a href="https://obrien365.com/ob-wp/" onClick={onClick}>
          Dealer Portal
        </a>
      </li>
    </ul>
  );
}
