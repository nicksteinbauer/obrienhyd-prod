import {NavLink} from '@remix-run/react';

export default function OperationMenu({onClick}) {
  return (
    <>
      <h4>Operation Specialty</h4>
      <div className="always-flex">
        <ul className="aquapark-nav-container__list fifty" onClick={onClick}>
          <li className="aquapark-nav-container__list-item">
            <NavLink to="/collections/beach">Beach</NavLink>
          </li>
          <li className="aquapark-nav-container__list-item">
            <NavLink to="/collections/hotel-resort">Hotel &amp; Resort</NavLink>
          </li>
          <li className="aquapark-nav-container__list-item">
            <NavLink to="/collections/lake">Lake</NavLink>
          </li>
          <li className="aquapark-nav-container__list-item">
            <NavLink to="/collections/camp">Camp</NavLink>
          </li>
          <li className="aquapark-nav-container__list-item">
            <NavLink to="/collections/wake-park">Wake Park</NavLink>
          </li>
        </ul>
        <ul className="aquapark-nav-container__list fifty" onClick={onClick}>
          <li className="aquapark-nav-container__list-item">
            <NavLink to="/collections/commercial-pool">Commercial Pool</NavLink>
          </li>
          <li className="aquapark-nav-container__list-item">
            <NavLink to="/collections/brand-agency">Brand &amp; Agency</NavLink>
          </li>
          <li className="aquapark-nav-container__list-item">
            <NavLink to="/collections/summer-camp">Summer Camp</NavLink>
          </li>
          <li className="aquapark-nav-container__list-item">
            <NavLink to="/collections/yacht">Yacht</NavLink>
          </li>
          <li className="aquapark-nav-container__list-item">
            <NavLink to="/collections/lounges">Lounges</NavLink>
          </li>
          <li className="image-holder"></li>
        </ul>
      </div>
    </>
  );
}
