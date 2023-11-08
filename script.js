// JavaScript to show/hide WhatsApp widget on scroll
window.addEventListener('scroll', function() {
    const widget = document.getElementById('whatsapp-widget');
    if (window.scrollY > 100) { // Adjust the scroll position to trigger the widget
      widget.style.display = 'block';
    } else {
      widget.style.display = 'none';
    }
  });