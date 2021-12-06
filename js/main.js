// Initialize and add the map
function initMap() {
  // Your location
  const loc = { lat: 31.354675, lng: 34.308826 };
  // Centered map on location
  const map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 16,
    center: loc
  });
  // The marker, positioned at location
  const marker = new google.maps.Marker({ position: loc, map: map });
}

// Smooth Scrolling
$('nav a, .showcase a').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
});

// Sticky menu background
window.addEventListener('scroll', function() {
  if (window.scrollY > 150) {
    document.querySelector('header').style.opacity = 0.9;
  } else {
    document.querySelector('header').style.opacity = 1;
  }
});