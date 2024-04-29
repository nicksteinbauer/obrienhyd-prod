import {useEffect, useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import SmallX from './SmallX';

import {NavLink} from '@remix-run/react';

import PinLogo from '~/components/logos/Pinlogo';
import NavWakesurfing from './NavWakesurfing';
import NavWakeboarding from './NavWakeboarding';
import NavMargaritaville from './NavMargaritaville';
import NavPaddleboarding from './NavPaddleboarding';
import NavWaterskiing from './NavWaterskiing';
import NavKneeboarding from './NavKneeboarding';
import NavTubing from './NavTubing';
import NavFloating from './NavFloating';
import NavRopes from './NavRopes';
import NavLifeJackets from './NavLifeJackets';
import NavGear from './NavGear';
import NavSupport from './NavSupport';

function MobileNav({onClick}) {
  const [isClient, setIsClient] = useState(false);
  const [Accordion, setAccordion] = useState(null);

  useEffect(() => {
    setIsClient(true);
    // Dynamically import the Accordion component only on the client
    import('react-bootstrap/Accordion')
      .then((module) => setAccordion(module.default))
      // eslint-disable-next-line no-console
      .catch((error) => console.error('Error loading Accordion:', error));
  }, []);

  if (!isClient || !Accordion) {
    return null; // Render nothing until the Accordion component is loaded
  }

  return (
    <>
      <menu className="navigation">
        <PinLogo />
        <div className="nav-buffer">
          <Accordion
            //defaultActiveKey="0"
            flush
          >
            <ul className="navBar-mobile">
              <li className="navbar-item">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <span>Obrien</span>
                    <SmallX />
                  </Accordion.Header>
                  <Accordion.Body>
                    <Accordion
                      //defaultActiveKey="0"
                      flush
                    >
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          <span>Wakesurfing</span>
                          <SmallX />
                        </Accordion.Header>
                        <Accordion.Body>
                          <NavWakesurfing onClick={onClick} />
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>
                          <span>Wakeboarding</span>
                          <SmallX />
                        </Accordion.Header>
                        <Accordion.Body>
                          <NavWakeboarding onClick={onClick} />
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2">
                        <Accordion.Header>
                          <span>Paddleboarding</span>
                          <SmallX />
                        </Accordion.Header>
                        <Accordion.Body>
                          <NavPaddleboarding onClick={onClick} />
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="3">
                        <Accordion.Header>
                          <span>Waterskiing</span>
                          <SmallX />
                        </Accordion.Header>
                        <Accordion.Body>
                          <NavWaterskiing onClick={onClick} />
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="4">
                        <Accordion.Header>
                          <span>Kneeboarding</span>
                          <SmallX />
                        </Accordion.Header>
                        <Accordion.Body>
                          <NavKneeboarding onClick={onClick} />
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="5">
                        <Accordion.Header>
                          <span>Tubing</span>
                          <SmallX />
                        </Accordion.Header>
                        <Accordion.Body>
                          <NavTubing onClick={onClick} />
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="6">
                        <Accordion.Header>
                          <span>Floating</span>
                          <SmallX />
                        </Accordion.Header>
                        <Accordion.Body>
                          <NavFloating onClick={onClick} />
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="7">
                        <Accordion.Header>
                          <span>Tow Ropes</span>
                          <SmallX />
                        </Accordion.Header>
                        <Accordion.Body>
                          <NavRopes onClick={onClick} />
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="8">
                        <Accordion.Header>
                          <span>Life Jackets</span>
                          <SmallX />
                        </Accordion.Header>
                        <Accordion.Body>
                          <NavLifeJackets onClick={onClick} />
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="9">
                        <Accordion.Header>
                          <span>More Gear</span>
                          <SmallX />
                        </Accordion.Header>
                        <Accordion.Body>
                          <NavGear onClick={onClick} />
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <span>Margaritaville</span>
                    <SmallX />
                  </Accordion.Header>
                  <Accordion.Body>
                    <NavMargaritaville onClick={onClick} />
                  </Accordion.Body>
                </Accordion.Item>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <NavLink
                      to="/collections/hydroslide"
                      className="accordion-button almostButton"
                      onClick={onClick}
                    >
                      <span>Hydroslide</span>
                    </NavLink>
                  </h2>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <NavLink
                      to="/collections/sale"
                      className="accordion-button almostButton"
                      onClick={onClick}
                    >
                      <span>Sale</span>
                    </NavLink>
                  </h2>
                </div>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <span>Support</span>
                    <SmallX />
                  </Accordion.Header>
                  <Accordion.Body>
                    <NavSupport onClick={onClick} />
                  </Accordion.Body>
                </Accordion.Item>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <NavLink
                      to="/pages/team"
                      className="accordion-button almostButton"
                      onClick={onClick}
                    >
                      <span>Team</span>
                    </NavLink>
                  </h2>
                </div>
              </li>
            </ul>
          </Accordion>
        </div>
      </menu>
    </>
  );
}

export default MobileNav;
