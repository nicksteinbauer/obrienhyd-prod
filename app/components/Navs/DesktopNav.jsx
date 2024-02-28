//import {NavLink} from '@remix-run/react';
import {useState} from 'react';
import AquaparkDeskMenu from './AquaparkDeskMenu';
import LakefrontDeskMenu from './LakefrontDeskMenu';

import {CSSTransition} from 'react-transition-group';

function DesktopNav() {
  const [AquaparkMenu, setAquaparkMenu] = useState(false);
  const [LakefrontMenu, setLakefrontMenu] = useState(false);
  //   const [WhyMenu, setWhyMenu] = useState(false);
  return (
    <>
      <ul className="navBar always-flex justify">
        <li
          className="navbar-item"
          onMouseEnter={() => setAquaparkMenu(!AquaparkMenu)}
          onMouseLeave={() => setAquaparkMenu(!AquaparkMenu)}
        >
          <div className="flex-vertical fullHeight">
            <span className="subSpan">Aquapark</span>
          </div>

          <CSSTransition
            in={AquaparkMenu}
            timeout={300} // Adjust as needed
            classNames="fade"
            unmountOnExit
          >
            <AquaparkDeskMenu
              AquaparkMenu={AquaparkMenu}
              onClick={() => setAquaparkMenu(!AquaparkMenu)}
            />
          </CSSTransition>
        </li>
        <li
          className="navbar-item"
          onMouseEnter={() => setLakefrontMenu(!LakefrontMenu)}
          onMouseLeave={() => setLakefrontMenu(!LakefrontMenu)}
        >
          <div className="flex-vertical fullHeight">
            <span className="subSpan">Lakefront</span>
          </div>
          {LakefrontMenu && (
            <LakefrontDeskMenu
              onClick={() => setLakefrontMenu(!LakefrontMenu)}
            />
          )}
        </li>
      </ul>
    </>
  );
}

export default DesktopNav;
