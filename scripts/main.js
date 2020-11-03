$(document).ready(function(){
  console.log('jQuery Active');

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