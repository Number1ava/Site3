$(function () {
  $(".slider").slick({
    arrows: false,
    dots:true,
    autoplay:2000,
  });
});

$(function () {
  $(".sliders").slick({
    arrows:false,
   infinite: true,
   dots:true,
   autoplay:1800,
   slidesToShow: 3,
   slidesToScroll: 2,
  //  prevArrow:'<button type="button" class="slick-prev"><img src="img/arrow-left.svg" alt="arrow"></button>',
  //  nextArrow:'<button type="button" class="slick-next"><img src="img/arrow-right.svg" alt="arrow"></button>',
  });
});