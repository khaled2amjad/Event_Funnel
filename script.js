// Promo Video Functionality
function playPromoVideo() {
    const video = document.querySelector('.promo-video');
    const overlay = document.querySelector('.video-overlay');

    if (video) {
        video.play();
        overlay.style.opacity = '0';
        overlay.style.pointerEvents = 'none';
    }
}

// Form Submission Handler
document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.querySelector('.registration-form');

    if (registrationForm) {
        registrationForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission
            window.location.href = 'confirmation.html'; // Redirect to confirmation page
        });
    }
});

// Video Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('.promo-video');
    const overlay = document.querySelector('.video-overlay');

    if (video && overlay) {
        // Show overlay when video is paused or ended
        video.addEventListener('pause', function() {
            overlay.style.opacity = '1';
            overlay.style.pointerEvents = 'auto';
        });

        video.addEventListener('ended', function() {
            overlay.style.opacity = '1';
            overlay.style.pointerEvents = 'auto';
        });

        // Hide overlay when video is playing
        video.addEventListener('play', function() {
            overlay.style.opacity = '0';
            overlay.style.pointerEvents = 'none';
        });
    }
});
