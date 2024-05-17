import {NavLink} from '@remix-run/react';

export default function NavPaddleboarding(onClick) {
  return (
    <ul className="obrien-nav-container__list">
      <li className="obrien-nav-container__list-item">
        <NavLink to="/collections/stand-up-paddleboarding" onClick={onClick}>
          Paddleboarding
        </NavLink>
      </li>
      <li className="obrien-nav-container__list-item">
        <NavLink to="/collections/stand-up-paddleboards" onClick={onClick}>
          Paddleboards
        </NavLink>
      </li>
      <li className="obrien-nav-container__list-item">
        <NavLink
          to="/collections/stand-up-paddleboard-paddles"
          onClick={onClick}
        >
          Paddles
        </NavLink>
      </li>
      <li className="obrien-nav-container__list-item">
        <NavLink
          to="/collections/stand-up-paddleboard-accessories"
          onClick={onClick}
        >
          Accessories
        </NavLink>
      </li>
      <li className="image-holder"></li>
    </ul>
  );
}
