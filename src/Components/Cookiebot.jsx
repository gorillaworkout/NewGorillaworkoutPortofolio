import { useEffect } from 'react';

function Cookiebot() {
    // <script id="CookieDeclaration" src="https://consent.cookiebot.com/833787b2-df56-499c-bf41-32fbb791b29a/cd.js" type="text/javascript" async></script>
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://consent.cookiebot.com/1acfa841-3aea-4130-ae8f-a35cf0d48965/cd.js';
    script.setAttribute('data-cbid', '1acfa841-3aea-4130-ae8f-a35cf0d48965');
    script.setAttribute('type', 'text/javascript');
    document.head.appendChild(script);
  }, []);

  return null; // This component doesn't render anything
}

export default Cookiebot;
