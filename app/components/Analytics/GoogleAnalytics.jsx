function GoogleAnalytics() {
  return (
    <>
      {/* Google Analytics */}
      <script
        defer
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-LX25VH4JXM"
      ></script>
      <script
        async
        id="gtag-init"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-LX25VH4JXM', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      {/* Google Something... i think it's shopping */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-11157580141"
      ></script>
      <script
        async
        id="gtag-init"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-11157580141', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}

export default GoogleAnalytics;
