$(document).ready(function() {

    $(window).scroll(function() {
      if ($(this).scrollTop() > 1) {
        $(".header-area").addClass("sticky");
      } else {
        $(".header-area").removeClass("sticky");
      }
  
      updateActiveSection();
    });
  
    $(".header ul li a").click(function(e) {
      e.preventDefault(); 
  
      var target = $(this).attr("href");
  
      if ($(target).hasClass("active-section")) {
        return; 
      }
  
      if (target === "#home") {
        $("html, body").animate(
          {
            scrollTop: 0 
          },
          500
        );
      } else {
        var offset = $(target).offset().top - 40; 
  
        $("html, body").animate(
          {
            scrollTop: offset
          },
          500
        );
      }
  
      $(".header ul li a").removeClass("active");
      $(this).addClass("active");
    });
  

    ScrollReveal({
      distance: "100px",
      duration: 2000,
      delay: 200,
      reset: false,
    });

    ScrollReveal().reveal(".profile-img, .about-content, .education", {
      origin: "left"
    });

    ScrollReveal().reveal(".profile-text, .about-skills, .internship", {
      origin: "right"
    });

    ScrollReveal().reveal(".project-title, .contact-title", {
      origin: "top"
    });

    ScrollReveal().reveal(".projects, .contact, .project-item", {
      origin: "bottom"
    });


  // Optional: Add 'parent' class to <li> that has a submenu (not used in your current HTML, but useful if you expand)
  $('.navbar li:has(ul)').addClass('parent');

  // Toggle navbar visibility when .menulinks (hamburger) is clicked
  $('.menulinks').click(function () {
      $('.navbar').slideToggle(250); // Show/hide navbar
      $('body').toggleClass('mobile-open'); // Optional: add body class for styling
      return false;
  });
 

});
 

function updateActiveSection() {
  var scrollPosition = $(window).scrollTop();

  if (scrollPosition === 0) {
    $(".header ul li a").removeClass("active");
    $(".header ul li a[href='#home']").addClass("active");
    return;
  }

  $("section").each(function() {
    var target = $(this).attr("id");
    var offset = $(this).offset().top;
    var height = $(this).outerHeight();

    if (
      scrollPosition >= offset - 40 &&
      scrollPosition < offset + height - 40
    ) {
      $(".header ul li a").removeClass("active");
      $(".header ul li a[href='#" + target + "']").addClass("active");
    }
  });
}


$(window).on('load resize', function() {
  sameheight('.project-item .project-in .site-logo');
});

function sameheight(clsaaName) {
    var highest = null;
    var hi = 0;
    jQuery(clsaaName).each(function() {
    var h = jQuery(this).outerHeight();
    if (h > hi) {
    hi = h;
    highest = jQuery(this);
}
});
    jQuery(clsaaName).css('min-height', hi);
}
