$(document).ready(function () {
  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);
  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
  }
  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }

  var tabsItems = $(".tabs__item");
  var contentItem = $(".tabs-content__item");

  tabsItems.on("click", function (event) {
    var activeCotent = $(this).attr("data-target");
    tabsItems.removeClass("tabs__item--active");
    contentItem.removeClass("tabs-content__item--active");
    $(activeCotent).addClass("tabs-content__item--active");
    $(this).addClass("tabs__item--active");
  });

  var mySwiper = new Swiper(".reviews-slider", {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
      el: ".reviews-pagination",
    },

    autoplay: {
      delay: 7000,
    },
    // Остановка слайдера при наведении курсора
    on: {
      init() {
        this.el.addEventListener("mouseenter", () => {
          this.autoplay.stop();
        });

        this.el.addEventListener("mouseleave", () => {
          this.autoplay.start();
        });
      },
    },
  });

  var storiesSlider = new Swiper(".stories-slider", {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".stories-slider__button--next",
      prevEl: ".stories-slider__button--prev",
    },

    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });
});
