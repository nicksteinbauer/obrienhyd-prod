import {NavLink} from '@remix-run/react';

export default function ConfigurationsMenu({onClick}) {
  return (
    <>
      <h4>Configurations</h4>
      <ul className="aquapark-nav-container__list" onClick={onClick}>
        <li className="aquapark-nav-container__list-item">
          <NavLink to="/aquapark/design-studio">Design Studio</NavLink>
        </li>
        <li className="aquapark-nav-container__list-item">
          <NavLink to="/aquapark/partner-stories">Partner Stories</NavLink>
        </li>
        <li className="aquapark-nav-container__list-item">
          <NavLink to="/aquapark/serpentine-aquaparks">
            Serpentine Aquaparks
          </NavLink>
        </li>
        <li className="aquapark-nav-container__list-item">
          <NavLink to="/aquapark/circuit-aquaparks">Circuit Aquaparks</NavLink>
        </li>
        <li className="aquapark-nav-container__list-item">
          <NavLink to="/aquapark/ring-aquaparks">Ring Aquaparks</NavLink>
        </li>
        <li className="aquapark-nav-container__list-item">
          <NavLink to="/aquapark/micro-aquaparks">Micro Aquaparks</NavLink>
        </li>
        <li className="aquapark-nav-container__list-item">
          <NavLink to="/aquapark/challenge-tracks">Challenge Tracks</NavLink>
        </li>
        <li className="image-holder"></li>
      </ul>
    </>
  );
}
