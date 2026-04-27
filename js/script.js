// Smooth scroll için navbar linkleri
// stackoverflow'dan aldım, smooth scroll için
document.querySelectorAll('.nav-link').forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        var target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Skill bar animasyonu
window.addEventListener('load', function() {
    var skillBars = document.querySelectorAll('.skill-bar-fill');
    
    setTimeout(function() {
        skillBars.forEach(function(bar) {
            var percent = bar.getAttribute('data-percent');
            bar.style.width = percent + '%';
        });
    }, 500);
});

// Hamburger menu toggle (mobil için)
var hamburger = document.getElementById('hamburger');
var navContainer = document.querySelector('.nav-container');

hamburger.addEventListener('click', function() {
    if (navContainer.style.display === 'flex') {
        navContainer.style.display = 'none';
    } else {
        navContainer.style.display = 'flex';
    }
});
