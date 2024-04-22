import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';

import PlayStructuresMenu from './PlayStructuresMenu';
import ConfigurationsMenu from './ConfigurationsMenu';
import LakeFrontMenu from './LakeFrontMenu';
import WhyMenu from './WhyMenu';
import SupportMenu from './SupportMenu';

import ContactLink from '../Header/ContactLink';
import SmallX from '../ui/SmallX';

export default function MobileNav(onClick) {
  return (
    <div className="mobileNav newSearch">
      <div className="submenuJump">
        <div className="subLine" />
        <div className="inside-md">
          <div className="backGray flex-xxs">
            <form action={`/search`} className="obrienSearch always-flex">
              <input
                className="search"
                type="search"
                placeholder="Search"
                name="q"
              />
              <button type="submit" className="iconSearch">
                Search
              </button>
            </form>
            <ContactLink />
          </div>
        </div>
        <div className="inside-md noPadd">
          <Accordion
            //defaultActiveKey="0"
            flush
          >
            <ul className="navBar-mobile">
              <li className="navbar-item">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <span>Aquapark Play Structures</span>
                    <SmallX />
                  </Accordion.Header>
                  <Accordion.Body>
                    <PlayStructuresMenu onClick={onClick} />
                  </Accordion.Body>
                </Accordion.Item>
              </li>
              <li className="navbar-item">
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <span>Aquapark Configurations</span>
                    <SmallX />
                  </Accordion.Header>
                  <Accordion.Body>
                    <ConfigurationsMenu onClick={onClick} />
                  </Accordion.Body>
                </Accordion.Item>
              </li>
              <li className="navbar-item">
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <span>Lakefront</span>
                    <SmallX />
                  </Accordion.Header>
                  <Accordion.Body>
                    <LakeFrontMenu onClick={onClick} />
                  </Accordion.Body>
                </Accordion.Item>
              </li>
              <li className="navbar-item">
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    <span>Why Aquaglide</span>
                    <SmallX />
                  </Accordion.Header>
                  <Accordion.Body>
                    <WhyMenu onClick={onClick} />
                  </Accordion.Body>
                </Accordion.Item>
              </li>
              <li className="navbar-item">
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    <span>Support</span>
                    <SmallX />
                  </Accordion.Header>
                  <Accordion.Body>
                    <SupportMenu onClick={onClick} />
                  </Accordion.Body>
                </Accordion.Item>
              </li>
            </ul>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
