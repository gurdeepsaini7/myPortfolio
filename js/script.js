
// Navbar --->

const navbar_header = document.getElementById('navbar-header');
const navbar_btn = document.querySelector('.navbar-btn');

navbar_btn.addEventListener('click', () => {
    navbar_header.classList.toggle('active');
});


// Navigation remove on click --->

const removeNavbar = document.querySelectorAll('.remove-navbar');

removeNavbar[0].addEventListener('click', () => {
    navbar_header.classList.remove('active');
});

removeNavbar[1].addEventListener('click', () => {
    navbar_header.classList.remove('active');
});

removeNavbar[2].addEventListener('click', () => {
    navbar_header.classList.remove('active');
});

removeNavbar[3].addEventListener('click', () => {
    navbar_header.classList.remove('active');
});

removeNavbar[4].addEventListener('click', () => {
    navbar_header.classList.remove('active');
});


// Back To Top Button --->

window.addEventListener('scroll', () => {
    const back_to_top = document.getElementById('back-to-top');

    if(window.pageYOffset >= 280){
      back_to_top.classList.add('active-2');
    }

    else{
      back_to_top.classList.remove('active-2');
    };
});

// Swiper --->

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: -30,
    loop: true,
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 5000,
      disableOnIntraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      100: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 1,
      },
  
      1250: {
        slidesPerView: 2,
      }
    },
    mousewheel: true,
    keyboard: true,
  });
