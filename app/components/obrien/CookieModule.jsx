// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable prettier/prettier */
import CookieConsent from 'react-cookie-consent';
import { Link } from '@remix-run/react';

export default function CookieModule() {
  return (
    <CookieConsent disableStyles={true}>
      <h4>This website uses cookies</h4>
      <p>
        We do this to better understand how visitors use our site to offer you a
        more personal experience. We share information about your use of our
        site with analytics partners in accordance with our <Link to="/privacy-policy">Privacy Notice.</Link>
      </p>
    </CookieConsent>
  );
}
