import {useState} from 'react';
import Facebook from '../logos/Facebook';
import Instagram from '../logos/Instagram';
import YouTube from '../logos/YouTube';
import Vimeo from '../logos/Vimeo';
import jsonp from 'jsonp';

function AboveFooter() {
  return (
    <div className="above-footer">
      <div className="top-above">
        <div className="inside-xl">
          <div className="white-back">
            <div className="ob-title text-center">
              <h2>
                <span>Stay Connected with O&apos;Brien</span>
              </h2>
              <p>
                We&apos;ll keep you up to date with our latest products, events
                and more!
              </p>
            </div>

            <div className="flex-md justify">
              <div className="forty-five form">
                <MailchimpForm />
              </div>
              <div className="forty-five flex-vertical">
                <div className="social always-flex justify-center gap5">
                  <a href="https://www.facebook.com/OBrienWakeboards">
                    <Facebook />
                  </a>
                  <a href="https://www.instagram.com/obrienwatersports/">
                    <Instagram />
                  </a>
                  <a
                    className="flex-vertical"
                    href="https://www.youtube.com/user/obrienh2osports"
                  >
                    <YouTube />
                  </a>
                  <a href="https://vimeo.com/obrienwatersports">
                    <Vimeo />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-above" />
    </div>
  );
}
export default AboveFooter;

function MailchimpForm() {
  const [email, setEmail] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const url =
      'https://obrien.us6.list-manage.com/subscribe/post?u=e8bd162f7a7b283432da0ea29&amp;id=639256cd28&amp;f_id=009631e3f0'; // you can use .env file to replace this
    jsonp(
      `${url}&EMAIL=${email}&FNAME=${fname}&LNAME=${lname}`,
      {param: 'c'},
      (_, {msg}) => {
        alert(msg);
      },
    );
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="mc-field-group">
        <label htmlFor="mce-EMAIL">
          Email Address <span className="asterisk">*</span>
        </label>
        <input
          type="email"
          name="EMAIL"
          className="required email"
          placeholder="Email"
          required=""
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mc-field-group">
        <label htmlFor="mce-FNAME">First Name</label>
        <input
          type="text"
          name="FNAME"
          className="text"
          id="mce-FNAME"
          placeholder="First Name"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
        />
      </div>
      <div className="mc-field-group">
        <label htmlFor="mce-LNAME">Last Name</label>
        <input
          type="text"
          name="LNAME"
          className="text"
          id="mce-LNAME"
          placeholder="Last Name"
          value={lname}
          onChange={(e) => setLname(e.target.value)}
        />
      </div>
      <div className="clear">
        <button
          type="submit"
          name="subscribe"
          id="mc-embedded-subscribe"
          className="button"
          value="Subscribe"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
