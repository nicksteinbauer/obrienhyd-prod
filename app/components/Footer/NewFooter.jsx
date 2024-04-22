import {NavLink} from '@remix-run/react';

import PlayStructuresMenu from '../Navs/PlayStructuresMenu';
import LakeFrontMenu from '../Navs/LakeFrontMenu';
import WhyMenu from '../Navs/WhyMenu';
import SupportMenu from '../Navs/SupportMenu';

import AquaglideLogo from '../Logos/AquaglideLogo';
import Facebook from '../Logos/Facebook';
import Instagram from '../Logos/Instagram';
import YouTube from '../Logos/YouTube';
import LinkedIn from '../Logos/LinkedIn';

export function NewFooter() {
  return (
    <footer className="mainFooter">
      <div className="inside-xl flex-sm justify theMainFooter">
        <div>
          <PlayStructuresMenu />
        </div>
        <div>
          <LakeFrontMenu />
        </div>
        <div>
          <WhyMenu />
        </div>
        <div>
          <SupportMenu />
        </div>
      </div>
      <div className="imageContain">
        <div className="aboutImg"></div>
      </div>
      <div className="footerFooter">
        <div className="inside-xl flex-sm justify">
          <div className="social always-flex">
            <a href="https://www.facebook.com" className="facebook">
              <Facebook />
            </a>
            <a href="https://www.instagram.com" className="insta">
              <Instagram />
            </a>
            <a href="https://www.youtube.com" className="youTube flex-vertical">
              <YouTube />
            </a>
            <a href="https://www.linkedin.com" className="linkedIn">
              <LinkedIn />
            </a>
          </div>
          <div className="footerLogo always-flex">
            <div className="flex-vertical">
              <span>&copy; Aquaglide, All Rights Reserved</span>
            </div>
            <NavLink to="/" className="flex-vertical">
              <span>
                <AquaglideLogo />
              </span>
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
