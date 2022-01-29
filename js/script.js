 $(function () {
     

//    menu js
     
    var scrolltop = $('.customnav').offset().top;
    $(window).scroll(function () {
        var scroll = $(this).scrollTop();
        if (scroll > scrolltop) {
            $('.customnav').addClass('fixtop');
        } else {
            $('.customnav').removeClass('fixtop');
        }
    });
     
//    top scrollbar
     
    $(window).scroll(function () {
        var scrolltop = $(window).scrollTop();
        if (scrolltop > 200) {
            $('.top').fadeIn(1000)
        } else {
            $('.top').fadeOut(1000)
        }
    })
    $('.top').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    }); 
     
     
//    scrollspy menu
  
       $('a[href*="#"]:not([href="#').on('click', function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 70
                }, 2000);
                return false;
            }
        }
    });
     
     
//    google map
     
    var googleMapSelector = $('#map'),
        myCenter = new google.maps.LatLng(23.757179, 90.361455);

    function initialize() {
        var mapProp = {
            center: myCenter,
            zoom: 17,
            scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map"), mapProp);
        var marker = new google.maps.Marker({
            position: myCenter,
            animation: google.maps.Animation.BOUNCE,
            icon: 'images/logo-3.png'
        });
        marker.setMap(map);
    }
    if (googleMapSelector.length) {
        google.maps.event.addDomListener(window, 'load', initialize);
    }


 // venobox light
 $('.venobox').venobox(); 
    
     
 });

 const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const navLink = document.querySelectorAll('.nav-links li a');
    burger.addEventListener('click', () => {
        // toggle nav
        nav.classList.toggle('nav-active');

        // animated links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7+ 0.3}s`;
            }
        });
        // burger animation
        burger.classList.toggle('toggle');

    });

}
navSlide();