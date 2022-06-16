(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });


    // Post carousel
    $(".post-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        center: true,
        autoplay: true,
        smartSpeed: 2000,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);


// pop up
document.getElementById("contact-us-btn").addEventListener('click' , function(){
    document.querySelector('.bg-pop-up').style.display = 'flex';
    document.querySelector('.section-title').style.opacity = '0';
    document.querySelector('html').scrollBehavior = 'initial';
    var x=window.scrollX;
    var y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
})
document.querySelector(".close-popup").addEventListener('click' , function(){
    document.querySelector('.bg-pop-up').style.display = 'none';
    document.querySelector('.section-title').style.opacity = '1';
    window.onscroll=function(){};
})

// sending email
// const btn = document.getElementById('sendMessageButton');
// btn.addEventListener('click' , function(e){
//     e.preventDefault()
//     const name = document.getElementById('pop-up-name').value;
//     const email = document.getElementById('pop-up-email').value;
//     const subject = document.getElementById('pop-up-subject').value;
//     const message = document.getElementById('pop-up-message').value;
//     const body = 'name :' + name + ' email : ' + email + ' subject : ' + subject + ' message : ' + message;  
//     console.log(body);
//     Email.send({
//         Host : "smtp.yourisp.com",
//         Username : "hrittikgarain@gmail.com",
//         Password : "ikmvysavnfrwzflg",
//         To : 'hrittikgarain@gmail.com',
//         From : email,
//         Subject : subject,
//         Body : body
//     }).then(
//       message => alert(message)
//     );
// })

const btn = document.getElementById('sendMessageButton');
btn.addEventListener('click' , function(e){
    e.preventDefault()
    const number = document.getElementById('pop-up-number').value;
    const body = document.getElementById('pop-up-message').value
    const params = {
        from_name : document.getElementById('pop-up-name').value,
        email_id : document.getElementById('pop-up-email').value,
        message : " Content : " + body ,
        number : document.getElementById('pop-up-number').value
    }
   
   emailjs.send("service_i9hwmso" , "template_1z7wnc6" , params).then(function(res){
    alert("Email Send");
   })
})


