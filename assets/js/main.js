/* Navbar stick on top effect */

$(window).on('scroll', function() {
  if ($(window).scrollTop()) {
    $('nav').addClass('black');
  } else {
    $('nav').removeClass('black');
  }
});

/* Open and close side nav */

function openSlideMenu() {
  document.getElementById("side-menu").style.width = '250px';
}

function closeSlideMenu() {
  document.getElementById("side-menu").style.width = '0';
}

window.addEventListener('mouseup', function(event) {
  var menu = document.getElementById("side-menu");
  if(event.target != menu) {  /* Add && event.target.parentNode != menu if u want the menu to remain open after clicking the link */
    menu.style.width = '0';
  }
});

/* Change active menu links and do a smooth scroll */

var sections = $('section')
  , nav = $('nav')
  , sideNav = $('#side-menu');

$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop()
  , nav_height = nav.outerHeight();

  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();

    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active');
      sideNav.find('a').removeClass('active');
      sections.removeClass('active');

      $(this).addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
      sideNav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  });
});

nav.find('a').on('click', function () {
  var $el = $(this)
    , id = $el.attr('href');

  $('html, body').animate({
    scrollTop: $(id).offset().top
  }, 700);

  return false;
});

sideNav.find('a').on('click', function () {
  var $el = $(this)
    , id = $el.attr('href');

  $('html, body').animate({
    scrollTop: $(id).offset().top
  }, 700);

  return false;
});

/* Smooth scrolling effect */

/* Not needed */

// $(function() {
//   $('a[href*="#"]:not([href="#"])').click(function() {
//     if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//       if (target.length) {
//         $('html, body').animate({
//           scrollTop: target.offset().top
//         }, 1000);
//         target.focus(); // Setting focus
//         if (target.is(":focus")) { // Checking if the target was focused
//           return false;
//         } else {
//           target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
//           target.focus(); // Setting focus
//         };
//         return false;
//       }
//     }
//   });
// });
