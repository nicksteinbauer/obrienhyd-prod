import {NavLink} from '@remix-run/react';

export default function ContactLink() {
  return (
    <div className="contactLink flex-vertical">
      <NavLink to="/contact-us">Contact Sales</NavLink>
    </div>
  );
}
