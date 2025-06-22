document.getElementById('menu-toggle').addEventListener('click', function () {
    const mobileMenu = document.getElementById('mobile-menu');
    const icon = this.querySelector('.menu-icon-i'); 

    mobileMenu.classList.toggle('hidden');

    if (icon.classList.contains('fa-bars')) {
        icon.classList.replace('fa-bars', 'fa-xmark');
    } else {
        icon.classList.replace('fa-xmark', 'fa-bars');
    }
});


if (typeof ScrollReveal === "function") {
  const scrollRevealOption = {
    origin: "bottom",
    distance: "50px",
    duration: 1000,
  };




  
  
    const videoThumbnail = document.getElementById("videoThumbnail");
    const playButton = document.getElementById("playButton");

    function createVideoPlayer() {
      const container = videoThumbnail.parentElement;
      container.innerHTML = `
        <iframe
          class="absolute top-0 left-0 w-full h-full rounded-lg"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0"
          title="EduRLab Software Feature Video"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      `;
    }

    videoThumbnail.addEventListener("click", createVideoPlayer);
    playButton.addEventListener("click", createVideoPlayer);
  

  ScrollReveal().reveal(".header__image img", {
    ...scrollRevealOption,
    origin: "right",
  });
  ScrollReveal().reveal(".header__content p", {
    ...scrollRevealOption,
    delay: 500,
  });
  ScrollReveal().reveal(".header__content h1", {
    ...scrollRevealOption,
    delay: 1000,
  });
  ScrollReveal().reveal(".header__btns", {
    ...scrollRevealOption,
    delay: 1500,
  });

  ScrollReveal().reveal(".destination__card", {
    ...scrollRevealOption,
    interval: 500,
  });

  ScrollReveal().reveal(".showcase__image img", {
    ...scrollRevealOption,
    origin: "left",
  });
  ScrollReveal().reveal(".showcase__content h4", {
    ...scrollRevealOption,
    delay: 500,
  });
  ScrollReveal().reveal(".showcase__content p", {
    ...scrollRevealOption,
    delay: 1000,
  });
  ScrollReveal().reveal(".showcase__btn", {
    ...scrollRevealOption,
    delay: 1500,
  });

  ScrollReveal().reveal(".banner__card", {
    ...scrollRevealOption,
    interval: 500,
  });

  ScrollReveal().reveal(".discover__card", {
    ...scrollRevealOption,
    interval: 500,
  });
}

if (document.querySelector(".swiper")) {
  const swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
  });
}


    function toggleFaq(event) {
      const btn = event.currentTarget;
      const contentId = btn.getAttribute('aria-controls');
      const content = document.getElementById(contentId);
      const expanded = btn.getAttribute('aria-expanded') === 'true';

      if (expanded) {
        content.classList.add('hidden');
        btn.setAttribute('aria-expanded', 'false');
        btn.querySelector('span:last-child').textContent = '+';
        btn.querySelector('span:last-child').classList.remove('rotate-45');
      } else {
        content.classList.remove('hidden');
        btn.setAttribute('aria-expanded', 'true');
        btn.querySelector('span:last-child').textContent = '−';
        btn.querySelector('span:last-child').classList.add('rotate-45');
      }
    }
  
const carousel = document.getElementById('carousel');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    function getCardWidth() {
      const card = carousel.querySelector('div');
      if (!card) return 0;
      const style = window.getComputedStyle(card);
      const width = card.offsetWidth;
      const marginRight = parseInt(style.marginRight) || 24;
      return width + marginRight;
    }

    prevBtn.addEventListener('click', () => {
      const scrollAmount = getCardWidth();
      carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', () => {
      const scrollAmount = getCardWidth();
      carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });