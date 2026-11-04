// GA4 Contact Form Conversion Tracking
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#contactForm');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
  
        // Fire GA4 conversion event
        if (typeof gtag === 'function') {
          gtag('event', 'generate_lead', {
            'event_category': 'Contact Form',
            'event_label': 'Wedding Enquiry',
            'value': 1
          });
        }
  
        alert('Thank you! We will contact you within 24 hours.');
        form.reset();
      });
    }
    console.log('Royal Frame Studios site loaded successfully');
  });