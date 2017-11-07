$(document).ready(function() {
 
  /*   toggle sidebar menu   */

  // $(".mob-menu-trigger").on("click", function() {
  //   $(".main-nav").css({'transform': 'translateY(0%)', 'transition': '0.3s'});
  //   $(".overlay").addClass("overlay--open");
  // });

  // $(".mob-menu-close").on("click", function(){
  //   $(".main-nav").css({'transform': 'translateY(-100%)', 'transition': '0.5s'});
  //   $(".overlay").removeClass("overlay--open");
  // });


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

 // $(".language--selected").on("click", function(){
 //    $(".language__item--active").removeClass("language__item--active");
 //    $(this).addClass("language__item--active");
 //  });


  /*   aside info-accordion   */

  // $('.accordion .accordion__body').hide();

  // $('.accordion .accordion__title').on('click', function(){
  //   if ($(this).hasClass('close')) {
  //     $(this).addClass('open').removeClass('close');
  //     $(this).siblings('.accordion__title').removeClass('open').addClass('close');
  //     $(this).next().slideDown(300);
  //     $(this).next().siblings('.accordion__body').slideUp(300);
  //   } else {
  //     $(this).addClass('close').removeClass('open');
  //     $(this).next().slideUp(300);
  //   }
  // });

});


// window.onload = function() {

//   /*   toggle sidebar menu   */

//   var burgerMenu = document.getElementsByClassName('mob-menu-trigger')[0],
//       crossMenu = document.getElementsByClassName('mob-menu-close')[0],
//       overlay = document.getElementsByClassName('overlay')[0],
//       mobNavigation = document.getElementsByClassName('main-nav')[0];
  
//   function openMenu(){
//     overlay.classList.toggle('overlay--open');
//     mobNavigation.classList.toggle('main-nav--mob-open');
//   }  

//   function closeMenu(){
//     overlay.classList.toggle('overlay--open');
//     mobNavigation.classList.toggle('main-nav--mob-open');
//   }

//   burgerMenu.addEventListener("click", openMenu);
//   crossMenu.addEventListener("click", closeMenu);


//   /*   select language   */

//   var selectLang = Array.from(document.getElementsByClassName('language__item'));  

//   selectLang.forEach(function (element, index){
//     element.addEventListener("click", function(){
//       if (!(selectLang[index].classList.contains('language__item--active'))) {
//         document.getElementsByClassName('language__item--active')[0].classList.remove('language__item--active');
//         selectLang[index].classList.add('language__item--active');
//       }
//     });
//   });


//   /*   aside info-accordion   */

//   var accBody = Array.from(document.getElementsByClassName('accordion__body'));
//   var accTitle = Array.from(document.getElementsByClassName('accordion__title'));

//   accTitle.forEach(function (element, index){
//     element.addEventListener("click", function(){

//       if (accTitle[index].classList.contains('close')) {
//         if (document.getElementsByClassName('open').length) {
//           document.getElementsByClassName('open')[0].classList.add('close');
//           document.getElementsByClassName('open')[0].classList.remove('open');
//           document.getElementsByClassName('accordion__body--show')[0].classList.remove('accordion__body--show');
//         }
      
//         accTitle[index].classList.add('open');
//         accTitle[index].classList.remove('close');
//         accTitle[index].nextElementSibling.classList.add('accordion__body--show');
//       } else {
//         accTitle[index].classList.add('close');
//         accTitle[index].classList.remove('open');
//         accTitle[index].nextElementSibling.classList.remove('accordion__body--show');
//       }
//     });
//   });

// };