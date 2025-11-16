//header
$(".h-open").click(function () {
  //ボタンがクリックされたら
  $(this).toggleClass('active');
  //ボタン自身に activeクラスを付与する
  $("#h-nav").toggleClass('panelactive');
  //ナビゲーションにpanelactiveクラスを付与する
});

$("#h-nav a").click(function () {
  //ナビゲーションのリンクがクリックされたら
  $(".h-open").removeClass('active');
  //ボタンの activeクラスを除去して
  $("#h-nav").removeClass('panelactive');
  //ナビゲーションのpanelactiveクラスも除去する
});

//interviews
document.addEventListener('DOMContentLoaded', function () {

  const mySwiper01 = new Swiper('#js-interviews-swiper',  {
    breakpoints: {
      767.9: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },

    autoHeight: true,

    // Optional parameters
    loop: true,
    loopAdditionalSlides: 1,
    speed: 1000,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
      waitForTransition: false,
    },

    // If we need pagination
    pagination: {
      el: "#js-interviews-pagination",
      type: "bullets",
      clickable: "clickable",
    },

    // Navigation arrows
    navigation: {
      nextEl: '#js-interviews-next',
      prevEl: '#js-interviews-prev',
    },
  });
});

// fvスクロールでロゴ変更
document.addEventListener("DOMContentLoaded", function () {
  const headerLogo = document.querySelector(".header-wrap-logo");
  const fv = document.querySelector(".fv");

  // fvの下端位置を取得
  const fvBottom = fv.offsetTop + fv.offsetHeight;

  window.addEventListener("scroll", function () {
    if (window.scrollY > fvBottom) {
      headerLogo.classList.add("scrolled");
    } else {
      headerLogo.classList.remove("scrolled");
    }
  });
});