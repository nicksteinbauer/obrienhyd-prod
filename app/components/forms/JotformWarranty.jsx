import {useEffect, useRef} from 'react';

export default function JotformWarranty() {
  const formRef = useRef(null);

  useEffect(() => {
    if (formRef.current) {
      const script = document.createElement('script');
      script.src = 'https://form.jotform.com/jsform/241915078001146';
      script.type = 'text/javascript';
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
