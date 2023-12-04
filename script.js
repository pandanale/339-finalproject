document.addEventListener("DOMContentLoaded", function() {
    const promoMessages = [
        "----- FREE SHIPPING until Dec 15 with code MERRY ----- ",
        "20% off on your first purchase ----- ",
        "Holiday Special: 10% off all dry goods ----- "
    ];

    const promoBanner = document.querySelector('.promo-banner');
    promoBanner.innerHTML = `<span class="marquee">${promoMessages.join(' ')}</span>`;
});


document.addEventListener('DOMContentLoaded', (event) => {
    if(window.location.pathname.includes('recipes.html')) {
    setTimeout(function() {
        document.body.innerHTML += `
        <div class="popup-overlay">
            <div class="popup-content">
            <h2>Join the OliaRosa Mailing List!</h2>
            <p>Sign up to receive more recipes, hear about our farm and receive exclusive offers!</p>
            <form id="emailSignup">
                <input type="email" id="email" name="email" placeholder="Enter your email address" required>
                <button type="submit">Sign Up</button>
            </form>
            <button class="close-popup">X Close</button>
            </div>
        </div>
        `;
        document.querySelector('.close-popup').addEventListener('click', function() {
        document.querySelector('.popup-overlay').style.display = 'none';
        });
        document.getElementById('emailSignup').addEventListener('submit', function(e) {
        e.preventDefault();
        // Here, you would normally handle the form submission, like sending data to your server
        alert('Thank you for signing up! We cant wait to share more about OliaRosa with you!');
        document.querySelector('.popup-overlay').style.display = 'none';
        });
    }, 10000); // 10 seconds
}
});

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('emailSubscription').addEventListener('click', function() {
      document.getElementById('popupOverlay').style.display = 'flex';
    });
  
    document.querySelector('.close-popup').addEventListener('click', function() {
      document.getElementById('popupOverlay').style.display = 'none';
    });
  
    document.getElementById('emailSignup').addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for signing up!');
      document.getElementById('popupOverlay').style.display = 'none';
    });
  });