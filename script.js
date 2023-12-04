document.addEventListener("DOMContentLoaded", function() {
    const promoMessages = [
        "----- FREE SHIPPING until Dec 15 with code MERRY ----- ",
        "20% off on your first purchase ----- ",
        "Holiday Special: 10% off all dry goods ----- "
    ];

    const promoBanner = document.querySelector('.promo-banner');
    promoBanner.innerHTML = `<span class="marquee">${promoMessages.join(' ')}</span>`;
});
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(function() {
    // Create the overlay
    const overlay = document.createElement('div');
    overlay.className = 'popup-overlay';
    overlay.style.display = 'flex';

    // Create the popup content
    const popupContent = document.createElement('div');
    popupContent.className = 'popup-content';
    popupContent.innerHTML = `
      <h2>Join the OliaRosa Mailing List!</h2>
      <p>Sign up to receive more recipes, hear about our farm and receive exclusive offers!</p>
      <form id="emailSignup">
        <input type="email" id="email" name="email" placeholder="Enter your email address" required>
        <button type="submit">Sign Up</button>
      </form>
      <button class="close-popup">X Close</button>
    `;

    // Append popup content to overlay
    overlay.appendChild(popupContent);

    // Append overlay to body
    document.body.appendChild(overlay);

    // Close popup logic
    document.querySelector('.close-popup').addEventListener('click', function() {
      overlay.style.display = 'none';
    });

    // Form submission logic
    document.getElementById('emailSignup').addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for signing up! We cant wait to share more about OliaRosa with you!');
      overlay.style.display = 'none';
    });

  }, 10000); // 10 seconds
});