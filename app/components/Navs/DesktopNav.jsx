//import {NavLink} from '@remix-run/react';
import AquaparkDeskMenu from './AquaparkDeskMenu';
import LakefrontDeskMenu from './LakefrontDeskMenu';
import WhyDeskMenu from './WhyDeskMenu';

import {CSSTransition} from 'react-transition-group';

function DesktopNav({
  AquaparkMenu,
  setAquaparkMenu,
  LakefrontMenu,
  setLakefrontMenu,
  WhyMenu,
  setWhyMenu,
}) {
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
          className="navbar-item notAqua"
          onMouseEnter={() => setLakefrontMenu(!LakefrontMenu)}
          onMouseLeave={() => setLakefrontMenu(!LakefrontMenu)}
        >
          <div className="flex-vertical fullHeight">
            <span className="subSpan">Lakefront</span>
          </div>
          <CSSTransition
            in={LakefrontMenu}
            timeout={300} // Adjust as needed
            classNames="fade"
            unmountOnExit
          >
            <LakefrontDeskMenu
              onClick={() => setLakefrontMenu(!LakefrontMenu)}
            />
          </CSSTransition>
        </li>
        <li
          className="navbar-item notAqua"
          onMouseEnter={() => setWhyMenu(!WhyMenu)}
          onMouseLeave={() => setWhyMenu(!WhyMenu)}
        >
          <div className="flex-vertical fullHeight">
            <span className="subSpan">Why Aquaglide</span>
          </div>
          <CSSTransition
            in={WhyMenu}
            timeout={300} // Adjust as needed
            classNames="fade"
            unmountOnExit
          >
            <WhyDeskMenu onClick={() => setWhyMenu(!WhyMenu)} />
          </CSSTransition>
        </li>
      </ul>
      <div className="flexFiller" />
    </>
  );
}

export default DesktopNav;
