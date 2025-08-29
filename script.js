
//canvas-textdraw
window.onload = function () {
  const canvas = document.getElementById("canv");
  const ctx = canvas.getContext("2d");

  const string = "WE MAINTAIN PLANT AND THE PLANT MAINTAINS US";
  const angle = Math.PI * 0.61;
  const radius = 950;
  let alpha = 0; // Start transparent

  ctx.font = "40px sans-serif";
  ctx.textAlign = "center";

  function drawText() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.translate(750, 1098);
    ctx.rotate(-1.08 * angle / 2);
    ctx.globalAlpha = alpha;

    for (let i = 0; i < string.length; i++) {
      ctx.rotate(angle / string.length);
      ctx.save();
      ctx.translate(0, -1 * radius);
      ctx.fillStyle = "white";
      ctx.fillText(string[i], 0, 0);
      ctx.restore();
    }

    ctx.restore();

    if (alpha < 1) {
      alpha += 0.01; // Speed of fade-in
      requestAnimationFrame(drawText);
    }
  }

  drawText();
};

//adding active class in navbar

var currentUrl = window.location.pathname;
document.querySelectorAll('.nav-link').forEach(function(link) {
    // Check if the link's href matches the current URL
    if (link.getAttribute('href') === currentUrl || link.getAttribute('href').includes(currentUrl)) {
        // Add the active class to the link
        link.classList.add('active');
    }
});

//fancybox
    $(document).ready(function() {
        $("[data-fancybox]").fancybox();
    });


  const toggleBtn = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  const menuIcon = toggleBtn.querySelector('.menu-icon');
  const closeIcon = toggleBtn.querySelector('.close-icon');

  toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuIcon.style.display = menuIcon.style.display === 'none' ? 'inline' : 'none';
    closeIcon.style.display = closeIcon.style.display === 'inline' ? 'none' : 'inline';
  });

  // Hamburger menu toggle
  document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger-btn');
    const nav = document.getElementById('main-nav');
    hamburger.addEventListener('click', function() {
      nav.classList.toggle('nav-open');
      hamburger.classList.toggle('is-active');
    });
  });




