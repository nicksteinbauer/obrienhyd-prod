import {useEffect, useRef} from 'react';

export default function GorgiasContact() {
  const formRef = useRef(null);

  useEffect(() => {
    if (formRef.current) {
      const script = document.createElement('script');
      script.src =
        'https://contact.gorgias.help/api/contact-forms/loader.js?v=3';
      script.defer = true;
      script.setAttribute('data-gorgias-loader-contact-form', '');
      script.setAttribute('data-gorgias-contact-form-uid', '7a65gch3');
      formRef.current.appendChild(script);

      return () => {
        formRef.current.removeChild(script);
      };
    }
  }, []);
  return (
    <div>
      <div ref={formRef}></div>
    </div>
  );
}
