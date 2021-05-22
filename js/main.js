// search advanced

$('#reveal-click').click(function () {
  $('#hidden-div').slideToggle({
    direction: "up"
  }, 300);
  $(this).toggleClass('clientsClose');
}); // end click


// counter
const animationDuration = 4000;

const frameDuration = 1000 / 60;

const totalFrames = Math.round(animationDuration / frameDuration);

const easeOutQuad = (t) => t * (2 - t);

const animateCountUp = (el) => {
  let frame = 0;
  const countTo = parseInt(el.innerHTML, 10);

  const counter = setInterval(() => {
    frame++;

    const progress = easeOutQuad(frame / totalFrames);

    const currentCount = Math.round(countTo * progress);

    if (parseInt(el.innerHTML, 10) !== currentCount) {
      el.innerHTML = currentCount;
    }

    if (frame === totalFrames) {
      clearInterval(counter);
    }
  }, frameDuration);
};

const countupEls = document.querySelectorAll(".timer");
countupEls.forEach(animateCountUp);


// slider car type 
var slider = $('#slider');
var track = slider.find('.track');
var modnum = slider.find('.thumb').length;
var modwidth = slider.find('.thumb').eq(0).outerWidth();
var trackwidth = slider.find('.slider-container').outerWidth();
var overflow = modnum*modwidth-trackwidth;

track.width( modnum*modwidth );

if ( modnum>4 ) {
  $('.btnPrevType').show();
  $('.btnNextType').show();
}

$('.btnPrevType').click(function() {
  var left = parseInt( track.css("marginLeft"),10);
  track.queue("steps", function(next) {

    if( left >= 0 ) {
      track.animate({
        marginLeft: '+=50px'
      }, 130);
    } else {
      track.animate({
        marginLeft: '+=160px'
      }, 260);
    }
    next();

  }).queue("steps", function(next) {

    if( left >= 0 ) {
      track.animate({
        marginLeft: 0
      }, 130);
    }
    next();

  }).dequeue("steps");
});

$('.btnNextType').click(function() {
  var left = parseInt( track.css("marginLeft"),10);
  track.queue("steps", function(next) {

    if( Math.abs(left) >= overflow-modwidth ) {
      track.animate({
        marginLeft: '-=50px'
      }, 130);
    } else {
      track.animate({
        marginLeft: '-=160px'
      }, 260);
    }
    next();

  }).queue("steps", function(next) {

    if( Math.abs(left) >= overflow-modwidth ) {
      track.animate({
        marginLeft: -overflow
      }, 130);
    }
    next();

  }).dequeue("steps");
});
// SLIDR CAR TYPE

// scroll to top
var btn = $('#button');
$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});
btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
// slider for brandes
$('.brands').slick({
  dots: false,
  arrows: true,
  infinite: true,
  speed: 300,
  arrow:true,
  rtl: true,
  slidesToShow: 9,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1204,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }
    ,
    {
      breakpoint: 377,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
});


// special cars slider
$('.showroom').slick({
  dots: false,
  arrows: true,
  infinite: true,
  speed: 300,
  arrow:true,
  rtl: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1204,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
  

// cars type slider
// special cars slider
$('.carType').slick({
  dots: false,
  arrows: true,
  infinite: true,
  speed: 300,
  arrow:true,
  rtl: true,
  slidesToShow: 7,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1204,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 428,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 370,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
// car ads page grid view and list view
function showList(e) {
  var $gridCont = $('.grid-container');
  e.preventDefault();
  $gridCont.hasClass('list-view') ? $gridCont.removeClass('list-view') : $gridCont.addClass('list-view');
}
function gridList(e) {
  var $gridCont = $('.grid-container')
  e.preventDefault();
  $gridCont.removeClass('list-view');
}

$(document).on('click', '.btn-grid', gridList);
$(document).on('click', '.btn-list', showList);



// accorion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      panel.style.overFlowY=("scroll");
    } 
  });
}
// slider ads details 
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
// ================add ad page======

$('#imageInput').on('change', function() {
  $input = $(this);
  if($input.val().length > 0) {
    fileReader = new FileReader();
    fileReader.onload = function (data) {
    $('.image-preview').attr('src', data.target.result);
    }
    fileReader.readAsDataURL($input.prop('files')[0]);
    $('.image-button').css('display', 'none');
    $('.image-preview').css('display', 'block');
    $('.change-image').css('display', 'block');
  }
});
            
$('.change-image').on('click', function() {
  $control = $(this);			
  $('#imageInput').val('');	
  $preview = $('.image-preview');
  $preview.attr('src', '');
  $preview.css('display', 'none');
  $control.css('display', 'none');
  $('.image-button').css('display', 'block');
});
// edit profile page 
