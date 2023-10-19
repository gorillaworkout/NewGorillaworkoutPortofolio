import { useEffect } from 'react';

function Cookiebot() {
    // <script id="CookieDeclaration" src="https://consent.cookiebot.com/833787b2-df56-499c-bf41-32fbb791b29a/cd.js" type="text/javascript" async></script>
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://consent.cookiebot.com/833787b2-df56-499c-bf41-32fbb791b29a/cd.js';
    script.setAttribute('data-cbid', '833787b2-df56-499c-bf41-32fbb791b29a');
    script.setAttribute('type', 'text/javascript');
    document.head.appendChild(script);
  }, []);

  return null; // This component doesn't render anything
}

export default Cookiebot;
