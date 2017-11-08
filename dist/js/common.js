$(document).ready(function() {

  /*   switch items in main naviation   */  

  $('.menu__item').on('click', function(){
      $(this).siblings().removeClass("menu__item--active");
      $(this).addClass("menu__item--active");
  });

  /*   blinking button   */  
          
  var flag = 0;
  setInterval(function(){
      flag++;
      if(flag % 2) {
          $('.promo__btn').addClass('promo__btn--blink');
      } else if(!(flag % 2)) {
          $('.promo__btn').removeClass('promo__btn--blink');
          flag *= 0;
      }
  }, 800);

  /*   select language   */

  $('.language--selected').on('click', function(){
    $('.language__list').slideToggle(300);
  });

  $('.language__list-item').on('click', function(){
    var flagSrc = $(this).find('img').attr('src');
    $(this).closest('.language').find('a > img').attr('src', flagSrc);
    $('.language__list').slideToggle(300);
  });

  /*   right side games slider  */

  $('.game-slider').slick({
    dots: false,
    arrows: true,
    vertical: true,
    infinite: true,
    autoplay: true,
    slidesToScroll: 1,
    slidesToShow: 3,
  });

});
