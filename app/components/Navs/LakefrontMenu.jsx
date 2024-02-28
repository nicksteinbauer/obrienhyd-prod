import {NavLink} from '@remix-run/react';

export default function LakefrontMenu({onClick}) {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    <ul className="aquapark-nav-container__list" onClick={onClick}>
      <li className="aquapark-nav-container__list-item">
        <NavLink to="/lakefront/lakefront-mini-parks">
          Lakefront Mini Parks
        </NavLink>
      </li>
      <li className="aquapark-nav-container__list-item">
        <NavLink to="/lakefront/bouncers-trampolines">
          Bouncers &amp; Trampolines
        </NavLink>
      </li>
      <li className="aquapark-nav-container__list-item">
        <NavLink to="/lakefront/lounges">Lounges</NavLink>
      </li>
      <li className="aquapark-nav-container__list-item">
        <NavLink to="/lakefront/parts-accessories">
          Parts &amp; Accessories
        </NavLink>
      </li>
      <li className="image-holder"></li>
    </ul>
  );
}
