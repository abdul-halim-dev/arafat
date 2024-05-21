$(document).ready(function(){
   /*===== header js start=========== */
    $('.menu-bar span').click(function(){
        $('nav').show();
    })

    $('#cross').click(function(){
    $('nav').hide()
    });
 /*===== header js start=========== */

 $('.icon-hoverr').click(function(){
    $('.hide-img').show();
 });
$('.open-box').click(function(){
    $('.hide-img').hide();
});



// owl carousel 
$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });
  // owl carousel 

// $('.name-input [type="text"]').click(function(){
// $(this).addClass(' ball', 'tall:focus');
// });
 
});


//=========== owl carousel============= js 
var owl = $('.owl-carousel');
owl.owlCarousel({
    items:3,
    loop:true,
   
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        600:{
            
        },
        1000:{
            items:2,
          
        }
    }
})

//=========== owl carousel============= js 