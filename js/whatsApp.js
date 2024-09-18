
function contactWhatsApp() {
  const phoneNumber = '+967738281401';
  const message = 'Hello, I would like to get in touch!';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
}