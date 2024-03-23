import {NavLink} from '@remix-run/react';

export default function PlayStructuresMenu({onClick}) {
  return (
    <>
      <h4>Aquapark Play Structures</h4>
      <div className="always-flex">
        <ul className="aquapark-nav-container__list forty">
          <li className="aquapark-nav-container__list-item">
            <NavLink to="/aquapark/design-studio" onClick={onClick}>
              Bouncers
            </NavLink>
          </li>
          <li className="aquapark-nav-container__list-item">
            <NavLink to="/aquapark/partner-stories" onClick={onClick}>
              Climbing Walls
            </NavLink>
          </li>
          <li className="aquapark-nav-container__list-item">
            <NavLink to="/aquapark/serpentine-aquaparks" onClick={onClick}>
              Connections
            </NavLink>
          </li>
          <li className="aquapark-nav-container__list-item">
            <NavLink to="/aquapark/circuit-aquaparks" onClick={onClick}>
              Junctions
            </NavLink>
          </li>
          <li className="aquapark-nav-container__list-item">
            <NavLink to="/aquapark/ring-aquaparks" onClick={onClick}>
              Lounges
            </NavLink>
          </li>
          <li className="aquapark-nav-container__list-item">
            <NavLink to="/aquapark/micro-aquaparks" onClick={onClick}>
              Rockers
            </NavLink>
          </li>
        </ul>
        <ul className="aquapark-nav-container__list sixty">
          <li className="aquapark-nav-container__list-item">
            <NavLink to="/aquapark/challenge-tracks" onClick={onClick}>
              Signature Pieces
            </NavLink>
          </li>
          <li className="aquapark-nav-container__list-item">
            <NavLink to="/aquapark/challenge-tracks" onClick={onClick}>
              Summer Camp/Lakefront
            </NavLink>
          </li>
          <li className="aquapark-nav-container__list-item">
            <NavLink to="/aquapark/challenge-tracks" onClick={onClick}>
              Track Components
            </NavLink>
          </li>
          <li className="aquapark-nav-container__list-item">
            <NavLink to="/aquapark/challenge-tracks" onClick={onClick}>
              Track Corners
            </NavLink>
          </li>
          <li className="aquapark-nav-container__list-item">
            <NavLink to="/aquapark/challenge-tracks" onClick={onClick}>
              Trampoline / Bouncer Accessores
            </NavLink>
          </li>
          <li className="aquapark-nav-container__list-item">
            <NavLink to="/aquapark/challenge-tracks" onClick={onClick}>
              Trampolines
            </NavLink>
          </li>
          <li className="image-holder"></li>
        </ul>
      </div>
    </>
  );
}
