import {NavLink} from '@remix-run/react';

export default function WhyMenu({onClick}) {
  return (
    <>
      <h4>Why Aquaglide</h4>
      <ul className="aquapark-nav-container__list">
        <li className="aquapark-nav-container__list-item">
          <NavLink to="/why/about-aquaglide" onClick={onClick}>
            About Aquaglide
          </NavLink>
        </li>
        <li className="aquapark-nav-container__list-item">
          <NavLink to="/why/sustainability" onClick={onClick}>
            Sustainability
          </NavLink>
        </li>
        <li className="aquapark-nav-container__list-item">
          <NavLink to="/why/sustainability" onClick={onClick}>
            Find A Dealer
          </NavLink>
        </li>
        <li className="aquapark-nav-container__list-item">
          <NavLink to="/why/sustainability" onClick={onClick}>
            Find an Aquapark
          </NavLink>
        </li>
        <li className="aquapark-nav-container__list-item">
          <NavLink to="/why/sustainability" onClick={onClick}>
            Blog
          </NavLink>
        </li>
        <li className="image-holder"></li>
      </ul>
    </>
  );
}
