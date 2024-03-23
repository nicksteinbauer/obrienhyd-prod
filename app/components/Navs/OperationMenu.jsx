import {NavLink} from '@remix-run/react';

export default function OperationMenu({onClick}) {
  return (
    <>
      <h4>Operation Specialty</h4>
      <div className="always-flex">
        <ul className="aquapark-nav-container__list fifty">
          <li className="aquapark-nav-container__list-item">
            <NavLink to="/collections/beach" onClick={onClick}>
              Beach
            </NavLink>
          </li>
          <li className="aquapark-nav-container__list-item">
            <NavLink to="/collections/hotel-resort" onClick={onClick}>
              Hotel &amp; Resort
            </NavLink>
          </li>
          <li className="aquapark-nav-container__list-item">
            <NavLink to="/collections/lake" onClick={onClick}>
              Lake
            </NavLink>
          </li>
          <li className="aquapark-nav-container__list-item">
            <NavLink to="/collections/camp" onClick={onClick}>
              Camp
            </NavLink>
          </li>
          <li className="aquapark-nav-container__list-item">
            <NavLink to="/collections/wake-park" onClick={onClick}>
              Wake Park
            </NavLink>
          </li>
        </ul>
        <ul className="aquapark-nav-container__list fifty">
          <li className="aquapark-nav-container__list-item">
            <NavLink to="/collections/commercial-pool" onClick={onClick}>
              Commercial Pool
            </NavLink>
          </li>
          <li className="aquapark-nav-container__list-item">
            <NavLink to="/collections/brand-agency" onClick={onClick}>
              Brand &amp; Agency
            </NavLink>
          </li>
          <li className="aquapark-nav-container__list-item">
            <NavLink to="/collections/summer-camp" onClick={onClick}>
              Summer Camp
            </NavLink>
          </li>
          <li className="aquapark-nav-container__list-item">
            <NavLink to="/collections/yacht" onClick={onClick}>
              Yacht
            </NavLink>
          </li>
          <li className="aquapark-nav-container__list-item">
            <NavLink to="/collections/lounges" onClick={onClick}>
              Lounges
            </NavLink>
          </li>
          <li className="image-holder"></li>
        </ul>
      </div>
    </>
  );
}
