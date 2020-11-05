$(document).ready(function(){
  let toggle = document.querySelector('#navTrigger');

  toggle.addEventListener('click', function (e) {
    e.preventDefault();
    let body = document.querySelector('body');
    body.classList.toggle('active');
  });

  $('#productSliderGallery').slick({
    arrows: false,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '#productSliderCaptions'
  });
  $('#productSliderCaptions').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '#productSliderGallery',
    fade: true,
    arrows: true,
    dots: true,
    appendDots: $('#productSliderNav'),
    prevArrow: $('#productSliderNavPrev'),
    nextArrow: $('#productSliderNavNext')
  });

});