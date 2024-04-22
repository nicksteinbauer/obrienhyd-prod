import {NavLink} from '@remix-run/react';

export default function PlayStructuresMenu({onClick}) {
  return (
    <>
      <h4>Aquapark Play Structures</h4>
      <div className="always-flex">
        <ul className="aquapark-nav-container__list forty">
          <li className="aquapark-nav-container__list-item">
            <NavLink to="/collections/bouncers" onClick={onClick}>
              Bouncers
            </NavLink>
          </li>
          <li className="aquapark-nav-container__list-item">
            <NavLink to="/collections/climbing-walls" onClick={onClick}>
              Climbing Walls
            </NavLink>
          </li>
          <li className="aquapark-nav-container__list-item">
            <NavLink to="/collections/connections" onClick={onClick}>
              Connections
            </NavLink>
          </li>
          <li className="aquapark-nav-container__list-item">
            <NavLink to="/collections/junctions" onClick={onClick}>
              Junctions
            </NavLink>
          </li>
          <li className="aquapark-nav-container__list-item">
            <NavLink to="/collections/lounges" onClick={onClick}>
              Lounges
            </NavLink>
          </li>
          <li className="aquapark-nav-container__list-item">
            <NavLink to="/collections/rockers" onClick={onClick}>
              Rockers
            </NavLink>
          </li>
        </ul>
        <ul className="aquapark-nav-container__list sixty">
          <li className="aquapark-nav-container__list-item">
            <NavLink to="/collections/signature-pieces" onClick={onClick}>
              Signature Pieces
            </NavLink>
          </li>
          <li className="aquapark-nav-container__list-item">
            <NavLink to="/collections/summer-camp-lakefront" onClick={onClick}>
              Summer Camp/Lakefront
            </NavLink>
          </li>
          <li className="aquapark-nav-container__list-item">
            <NavLink to="/collections/track-components" onClick={onClick}>
              Track Components
            </NavLink>
          </li>
          <li className="aquapark-nav-container__list-item">
            <NavLink to="/collections/track-corners" onClick={onClick}>
              Track Corners
            </NavLink>
          </li>
          <li className="aquapark-nav-container__list-item">
            <NavLink
              to="/collections/trampoline-bouncer-accessories"
              onClick={onClick}
            >
              Trampoline / Bouncer Accessores
            </NavLink>
          </li>
          <li className="aquapark-nav-container__list-item">
            <NavLink to="/collections/trampolines" onClick={onClick}>
              Trampolines
            </NavLink>
          </li>
          <li className="image-holder"></li>
        </ul>
      </div>
    </>
  );
}
