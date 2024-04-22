import {useState} from 'react';

import {CustomInput} from './CustomInput';

import generalConfig from '../../../general.config';
import {ValidateEmail} from './ValidateEmail';

export default function StockNotification({selectedVariant}) {
  const [email, setEmail] = useState('');

  const [formSending, setFormSending] = useState(false);
  const [isFormSent, setIsFormSent] = useState(false);
  const [formCheck, setFormCheck] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmitForm = async () => {
    setFormCheck(true);
    if (!ValidateEmail(email)) {
      setErrorMessage('Please enter a valid email.');
      return;
    }
    if (generalConfig.klaviyoPublicKey === '') {
      setErrorMessage(
        'Invalid Klaviyo public key. Please check the general.config.js file!',
      );
      return;
    }

    setFormCheck(false);
    setFormSending(true);

    const variantID = selectedVariant?.id.split('/').pop();
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

    var urlencoded = new URLSearchParams();
    urlencoded.append('a', generalConfig.klaviyoPublicKey);
    urlencoded.append('email', email);
    urlencoded.append('variant', variantID);
    urlencoded.append('platform', 'shopify');

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow',
    };

    try {
      const response = await fetch(
        `${generalConfig.klaviyoEndpoint}/onsite/components/back-in-stock/subscribe`,
        requestOptions,
      );

      setEmail('');
      setErrorMessage('');
      setIsFormSent(true);

      if (!response.ok) {
        setErrorMessage(
          response?.errors?.base
            ? response?.errors?.base[0]
            : 'Invalid email input value.',
        );
        setEmail('');
        setFormSending(false);
      } else {
        setErrorMessage('');
      }

      setFormSending(false);
    } catch (err) {
      setErrorMessage(err.message);
      setFormSending(false);
    }
  };

  return (
    <div className="klaviyoBackInStock">
      <p className="nope">
        <strong>Sorry, this product is out of stock</strong>
      </p>
      <p className="">
        Enter your email to receive an alert when this product is available
      </p>
      <div className="">
        <CustomInput
          label="Insert your email"
          isRequire={true}
          showValidMessage={false}
          value={email}
          check={formCheck}
          isFormSent={isFormSent}
          setValue={setEmail}
          setFormCheck={setFormCheck}
          validate={ValidateEmail}
          className=""
        />
        <div className="buttonHolder">
          <div
            className={` ${
              formSending ? 'pointer-events-none button' : 'button'
            }`}
            onClick={handleSubmitForm}
            aria-hidden="true"
          >
            {formSending ? 'Sending...' : 'Subscribe'}
          </div>
        </div>
      </div>
      {!isFormSent && errorMessage.length > 0 && (
        <p className="mt-2 text-sm text-red-500">{errorMessage}</p>
      )}
      {isFormSent && (
        <>
          {errorMessage.length > 0 ? (
            <p className="mt-2 text-sm text-red-500">{errorMessage}</p>
          ) : (
            <p className="mt-2 text-sm text-green-600">
              You will receive alerts when the product is restocked.
            </p>
          )}
        </>
      )}
    </div>
  );
}
