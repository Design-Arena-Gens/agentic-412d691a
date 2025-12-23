document.getElementById('appointmentForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validate form
    if (!name || !phone || !message) {
        alert('Please fill in all fields');
        return;
    }

    // Format WhatsApp message
    const whatsappMessage = `Name: ${name}\nPhone: ${phone}\nMessage: ${message}`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // WhatsApp number (remove + and spaces)
    const whatsappNumber = '919840991391';

    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp in new tab
    window.open(whatsappURL, '_blank');

    // Optional: Reset form after submission
    this.reset();
});
