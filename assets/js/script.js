
// Add Down Arrow Icon In Nav =================

var subMenu = $('header .header .navs > ul > li > .sub-menu');
$(subMenu).prev('a').addClass('down-arrow');


// Add Class Ative On Header On Scrolling ==============================

$(window).scroll(function(){
    if($(window).scrollTop() > 140){
        $('header').addClass('active');
    }
    else{
        $('header').removeClass('active');
    }
});



// Side-menu Area ==============================

var MenuBtn = $('header .header .menu-btn-box');
var sideMenu = $('.side-menu-area');
var sideMenu_overlay = $('.side-menu-area .overlay');
var sideMenu_close = $('.side-menu .header .close-btn');

$(MenuBtn).click(function(){
    $(sideMenu).addClass('active');
    $('body').css({'overflow' : 'hidden'});
});

$(sideMenu_overlay).click(function(){
    $(sideMenu).removeClass('active');
    $('body').css({'overflow' : ''});
});

$(sideMenu_close).click(function(){
    $(sideMenu).removeClass('active');
    $('body').css({'overflow' : ''});
});


// Side-menu Drop-Down ==============================

var sideMenu_subMenu = $('.side-menu .navs > ul > li > .sub-menu');
$(sideMenu_subMenu).prev('a').addClass('down-arrow');

$('.side-menu .navs > ul > li > a').click(function(){
    $('.side-menu .navs > ul > li > a ~ .sub-menu').slideUp();
    $('.side-menu .navs > ul > li > a').removeClass('active');
    
    if($(this).next('.sub-menu').is(':visible')){
        $('.side-menu .navs > ul > li > a').removeClass('active');
        $(this).next('.sub-menu').slideUp();
    }
    else{
        $(this).next('.sub-menu').slideDown();
        $(this).addClass('active');
    }
});


// Request-Form Popup ==============================
var requestBtn_1 = $('header .header .btns-box .request-btn button');
var requestBtn_2 = $('.side-menu .request-btn button');
var requestForm_popup = $('.request-form-popup');
var requestForm_close = $('.request-form .header .close-btn button');
var requestForm_overlay = $('.request-form-popup .overlay');

$(requestBtn_1).click(function(){
    $(requestForm_popup).addClass('active');
    $('body').css({'overflow' : 'hidden'});
});

$(requestBtn_2).click(function(){
    $(requestForm_popup).addClass('active');
    $('body').css({'overflow' : 'hidden'});
});

$(requestForm_close).click(function(){
    $(requestForm_popup).removeClass('active');
    $('body').css({'overflow' : ''});
});

$(requestForm_overlay).click(function(){
    $(requestForm_popup).removeClass('active');
    $('body').css({'overflow' : ''});
});

$(requestBtn_2).click(function(){
    $(sideMenu).removeClass('active');
    $('body').css({'overflow' : ''});
});


$('.services-area .services-list ul > div').not(`[data-box-id="tab-1"]`).slideUp();

    $('.services-area .services-list ul li').click(function () {
        var id = $(this).attr('data-list-id');
        $('.services-area .services-list ul li').removeClass('active');
        $(this).addClass('active');
        $('.services-area .service-content-box .service-content-tab').removeClass('active');
        $(`.services-area .service-content-box .service-content-tab[data-box-id="${id}"]`).addClass(
            'active');
        $('.services-area .services-list ul > div').not(`[data-box-id="${id}"]`).slideUp();
        $(`.services-area .services-list ul > div[data-box-id="${id}"]`).slideDown();
    });

    $('.steps-to-start .steps-list li').click(function () {
        var id = $(this).attr('data-step-id');
        $('.steps-to-start .steps-list li').removeClass('active');
        $(this).addClass('active');
        $('.steps-to-start .step-content-box .step-box').removeClass('active');
        $(`.steps-to-start .step-content-box .step-box[data-step-box="${id}"]`).addClass('active');
    });


 $('#project-slider .owl-carousel').owlCarousel({
            loop: true,
            autoplay: false,
            autoplaySpeed: 1000,
            autoplayTimeout: 2000,
            dots: false,
            dotsEach: true,
            nav: true,
            navText: ['<i class="far fa-long-arrow-alt-left"></i>', '<i class="far fa-long-arrow-alt-right"></i>'],
            stagePadding: 10,
            responsive: {
                0: {
                    items: 1,
                    dots: true,
                    nav:false,
                    margin: 10,
                },
                576: {
                    items: 2,
                    dots: true,
                    nav:false,
                    margin: 20,
                },
                768: {
                    items: 3,
                    margin: 20,
                },
                992: {
                    items: 4,
                    margin: 30,
                },
            },
        });


 $('#client-slider .owl-carousel').owlCarousel({
            loop: true,
            autoplay: true,
            autoplaySpeed: 1000,
            autoplayTimeout: 2000,
            dots: false,
            dotsEach: true,
            nav: true,
            navText: ['<i class="far fa-long-arrow-alt-left"></i>', '<i class="far fa-long-arrow-alt-right"></i>'],
            stagePadding: 10,
            responsive: {
                0: {
                    items: 1,
                    dots: true,
                    nav:false,
                    margin: 10,
                },
                576: {
                    items: 2,
                    dots: true,
                    nav:false,
                    margin: 20,
                },
                768: {
                    items: 3,
                    margin: 20,
                },
                992: {
                    items: 4,
                    margin: 30,
                },
            },
        });


 $('#ser-slider .owl-carousel').owlCarousel({
            loop: true,
            autoplay: false,
            autoplaySpeed: 1000,
            autoplayTimeout: 2000,
            dots: false,
            dotsEach: true,
            nav: true,
            navText: ['<i class="far fa-long-arrow-alt-left"></i>', '<i class="far fa-long-arrow-alt-right"></i>'],
            stagePadding: 10,
            responsive: {
                0: {
                    items: 1,
                    dots: true,
                    nav:false,
                    margin: 10,
                },
                576: {
                    items: 2,
                    dots: true,
                    nav:false,
                    margin: 20,
                },
                768: {
                    items: 3,
                    margin: 20,
                },
                992: {
                    items: 3,
                    margin: 30,
                },
            },
        });






 $('#testi-slider .owl-carousel').owlCarousel({
            loop: true,
            autoplay: false,
            autoplaySpeed: 1000,
            autoplayTimeout: 2000,
            dots: false,
            dotsEach: true,
            nav: true,
            navText: ['<i class="far fa-long-arrow-alt-left"></i>', '<i class="far fa-long-arrow-alt-right"></i>'],
            stagePadding: 10,
            responsive: {
                0: {
                    items: 1,
                    dots: true,
                    nav:false,
                    margin: 10,
                },
                576: {
                    items: 1,
                    dots: true,
                    nav:false,
                    margin: 20,
                },
                768: {
                    items: 2,
                    margin: 20,
                },
                992: {
                    items: 2,
                    margin: 30,
                },
            },
        });





    // BS tabs hover (instead - hover write - click)
    $('.tab-menu a').hover(function (e) {
      e.preventDefault()
      $(this).tab('show')
    })



        let tabs = document.querySelectorAll('.tab');
        let content = document.querySelectorAll('.content-item');
        for (let i = 0; i < tabs.length; i++) {            
            tabs[i].addEventListener('click', () => tabClick(i));
        }

        function tabClick(currentTab) {
            removeActive();
            tabs[currentTab].classList.add('active');
            content[currentTab].classList.add('active');
            console.log(currentTab);
        }

        function removeActive() {
            for (let i = 0; i < tabs.length; i++) {
                tabs[i].classList.remove('active');
                content[i].classList.remove('active');
            }
        }


$('.blog-slider .owl-carousel').owlCarousel({
            loop: true,
            autoplay: false,
            autoplaySpeed: 1000,
            autoplayTimeout: 2000,
            dots: true,
            dotsEach: true,
            nav: false,
            navText: ['<i class="fal fa-chevron-left"></i>', '<i class="fal fa-chevron-right"></i>'],
            stagePadding: 10,
            responsive: {
                0: {
                    items: 1,
                    dots: true,
                    nav:false,
                    margin: 10,
                },
                576: {
                    items: 2,
                    margin: 20,
                },
                768: {
                    items: 2,
                    margin: 20,
                },
                992: {
                    items: 3,
                    margin: 30,
                },
            },
        });




// country_code_input

document.querySelectorAll('input.country_code_select').forEach(function(e){
    var input = e;
    window.intlTelInput(input, {
        preferredCountries: ['ae'],
        utilsScript: "assets/intTelInput/build/js/utils.js",
    });
});

$('input.country_code_select').each(function(){
    var e = $(this);

    var width = $(e).parent().parent().parent().find('.input-field');
    
    $(e).parent().parent().find('ul.iti__country-list').css({'width' : `${$(width).outerWidth()}px`});
    
    $(e).parent().find('.iti__selected-flag').click(function(){

        $(e).parent().parent().find('ul.iti__country-list').css({'width' : `${$(width).outerWidth()}px`});

        $('ul.iti__country-list li').click(function(){

            var countryName = $(this).find('.iti__country-name').text();
            var countryCode = $(this).find('.iti__dial-code').text();

            $(e).parent().parent().parent().find('.country_code_input').val(`${countryName}: ${countryCode}`);

        });

    });
    
});

const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark")
})



// number count for stats, using jQuery animate

$('.counting').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 3000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
  

});





































