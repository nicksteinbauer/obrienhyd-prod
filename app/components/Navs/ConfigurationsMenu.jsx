import {NavLink} from '@remix-run/react';

export default function ConfigurationsMenu({onClick}) {
  return (
    <>
      <h4>Configurations</h4>
      <ul className="aquapark-nav-container__list configurations">
        <li className="aquapark-nav-container__list-item">
          <NavLink to="/aquapark/design-studio" onClick={onClick}>
            Design Studio
          </NavLink>
        </li>
        <li className="aquapark-nav-container__list-item">
          <NavLink to="/aquapark/partner-stories" onClick={onClick}>
            Partner Stories
          </NavLink>
        </li>
        <li className="aquapark-nav-container__list-item">
          <NavLink to="/aquapark/serpentine-aquaparks" onClick={onClick}>
            Serpentine Aquaparks
          </NavLink>
        </li>
        <li className="aquapark-nav-container__list-item">
          <NavLink to="/aquapark/circuit-aquaparks" onClick={onClick}>
            Circuit Aquaparks
          </NavLink>
        </li>
        <li className="aquapark-nav-container__list-item">
          <NavLink to="/aquapark/ring-aquaparks" onClick={onClick}>
            Ring Aquaparks
          </NavLink>
        </li>
        <li className="aquapark-nav-container__list-item">
          <NavLink to="/aquapark/micro-aquaparks" onClick={onClick}>
            Micro Aquaparks
          </NavLink>
        </li>
        <li className="aquapark-nav-container__list-item">
          <NavLink to="/aquapark/challenge-tracks" onClick={onClick}>
            Challenge Tracks
          </NavLink>
        </li>
        <li className="image-holder"></li>
      </ul>
    </>
  );
}
