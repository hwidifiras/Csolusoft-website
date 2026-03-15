const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';

window.dataLayer = window.dataLayer || [];
function gtag() {
  window.dataLayer.push(arguments);
}

window.gtag = window.gtag || gtag;
window.gtag('js', new Date());

if (GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
  window.gtag('config', GA_MEASUREMENT_ID, {
    anonymize_ip: true,
    page_path: window.location.pathname,
  });
} else {
  console.warn('GA4 non activé: remplacez G-XXXXXXXXXX dans src/analytics.js');
}
