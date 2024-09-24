// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable jsx-a11y/anchor-is-valid */
import AboveFooter from './AboveFooter';
import WhiteStackedLogo from '../logos/WhiteStackedLogo.jsx';
import {Image} from '@shopify/hydrogen';

import {NavLink} from '@remix-run/react';

export default function ObrienFooter() {
  return (
    <>
      <div id="subfooter">
        <AboveFooter />
      </div>
      <footer id="footer">
        <div className="flex-md inside-xl">
          <div className="footCol flex-vertical">
            <div className="stackedContain text-center">
              <WhiteStackedLogo />
              <ul className="footer-list fixedWidth">
                <li>
                  <NavLink to="/pages/contact">Contact Us</NavLink>
                </li>
                <li>
                  <NavLink to="/pages/warranty">Warranty &amp; Claims</NavLink>
                </li>
                <li>
                  <NavLink to="/pages/returns">Returns</NavLink>
                </li>
                <li>
                  <NavLink to="/pages/registration">
                    Product Registration
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="footCol">
            <ul className="footer-list">
              <li>
                <h4>Store</h4>
              </li>
              <li>
                <NavLink to="">O&apos;Brien</NavLink>
              </li>
              <li>
                <NavLink to="/collections/margaritaville-pool-floats">
                  Margaritaville
                </NavLink>
              </li>
              <li>
                <NavLink to="/collections/landshark-products">
                  LandShark
                </NavLink>
              </li>
              <li>
                <NavLink to="/collections/hydroslide">Hydroslide</NavLink>
              </li>
              <li>
                <NavLink to="/collections/sale">Sale</NavLink>
              </li>
              <li>
                <NavLink to="/pages/dealers" reloadDocument>
                  Dealers
                </NavLink>
              </li>
              <li>
                <NavLink to="/pages/team">Team</NavLink>
              </li>
            </ul>
          </div>
          <div className="footCol">
            <ul className="footer-list">
              <li>
                <h4>Support</h4>
              </li>
              <li>
                <NavLink to="/pages/about">About Us</NavLink>
              </li>
              <li>
                <NavLink to="/pages/faqs">FAQ&apos;s</NavLink>
              </li>
              <li>
                <NavLink to="/pages/size-charts">Size Charts</NavLink>
              </li>
              <li>
                <NavLink to="/pages/owners-manuals-safety-information">
                  Manuals &amp; Safety
                </NavLink>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="http://ag.canto.com/b/U1PCP"
                >
                  Dealer Portal
                </a>
              </li>
              <li>
                <NavLink to="/pages/careers">Careers</NavLink>
              </li>
            </ul>
          </div>
          <div className="footCol">
            <ul className="footer-list">
              <li>
                <h4 className="hiddenFooter">Support</h4>
              </li>
              <li>
                <NavLink to="/policies/privacy-policy">Privacy Policy</NavLink>
              </li>
              <li>
                <NavLink to="/policies/terms-of-service">
                  Terms of Service
                </NavLink>
              </li>
            </ul>
          </div>
          {/* <div className="footCol">
            <ul className="footer-list">
              <li>
                <h4>My Account</h4>
              </li>
            </ul>
          </div> */}
        </div>
        <div className="OTfooter">
          <a>
            <Image
              alt="check"
              src="https://cdn.shopify.com/s/files/1/0652/6831/8398/files/privacy-icon_1.png?v=1720635676"
              width={50}
            />
          </a>
          <button id="ot-sdk-btn" className="ot-sdk-show-settings">
            Your Privacy Choices
          </button>
        </div>
      </footer>
    </>
  );
}
