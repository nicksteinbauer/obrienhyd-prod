import {useState} from 'react';
import Facebook from '../logos/Facebook';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

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
                    <Facebook />
                  </a>
                  <a
                    className="flex-vertical"
                    href="https://www.youtube.com/user/obrienh2osports"
                  >
                    <Facebook />
                  </a>
                  <a href="https://vimeo.com/obrienwatersports">
                    <Facebook />
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

const CustomForm = ({status, message, onValidated}) => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      firstName &&
      lastName &&
      email.indexOf('@') > -1 &&
      onValidated({
        EMAIL: email,
        MERGE1: firstName,
        MERGE2: lastName,
      });
  };

  return (
    <form className="mc__form" onSubmit={(e) => handleSubmit(e)}>
      <h3 className="mc__title">
        {status === 'success'
          ? 'Success!'
          : 'Join our email list for future updates.'}
      </h3>

      {status === 'success' && (
        <div
          className="mc__alert mc__alert--success"
          dangerouslySetInnerHTML={{__html: message}}
        />
      )}
      {status !== 'success' ? (
        <div className="mc__field-container">
          <input
            label="First Name"
            onChange={setFirstName}
            type="text"
            value={firstName}
            placeholder="Jane"
            required
          />

          <input
            label="Last Name"
            onChange={setLastName}
            type="text"
            value={lastName}
            placeholder="Doe"
            required
          />

          <input
            label="Email"
            onChange={setEmail}
            type="email"
            value={email}
            placeholder="your@email.com"
            required
          />
        </div>
      ) : null}

      <input
        label="subscribe"
        type="submit"
        value={[email, firstName, lastName]}
      />
    </form>
  );
};

function MailchimpForm() {
  const postUrl = `https://obrien.us6.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

  return (
    <div>
      <div className="mc__form-container">
        <MailchimpSubscribe
          url={postUrl}
          render={({subscribe, status, message}) => (
            <CustomForm
              status={status}
              message={message}
              onValidated={(formData) => subscribe(formData)}
            />
          )}
        />
      </div>
    </div>

    // <form onSubmit={onSubmit}>
    //   <div className="mc-field-group">
    //     <label htmlFor="mce-EMAIL">
    //       Email Address <span className="asterisk">*</span>
    //     </label>
    //     <input
    //       type="email"
    //       name="EMAIL"
    //       className="required email"
    //       required=""
    //       value={email}
    //       onChange={(e) => setEmail(e.target.value)}
    //     />
    //   </div>
    //   <div className="mc-field-group">
    //     <label htmlFor="mce-FNAME">First Name</label>
    //     <input
    //       type="text"
    //       name="FNAME"
    //       className="text"
    //       id="mce-FNAME"
    //       value={fname}
    //       onChange={(e) => setFname(e.target.value)}
    //     />
    //   </div>
    //   <div className="mc-field-group">
    //     <label htmlFor="mce-LNAME">Last Name</label>
    //     <input
    //       type="text"
    //       name="LNAME"
    //       className="text"
    //       id="mce-LNAME"
    //       value={lname}
    //       onChange={(e) => setLname(e.target.value)}
    //     />
    //   </div>
    //   <div className="clear">
    //     <button
    //       type="submit"
    //       name="subscribe"
    //       id="mc-embedded-subscribe"
    //       className="button"
    //       value="Subscribe"
    //     />
    //   </div>
    // </form>
  );
}
