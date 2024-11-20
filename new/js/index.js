var multipleItemCarousel = document.querySelector('#carouselExampleControls')


if(window.matchMedia("(min-width:576px").matches){ 
    // jQuery(document).ready(function($) {
    var carousel = new bootstrap.Carousel(multipleItemCarousel, {
        interval: 500,
    })
          
var carouselWidth = $('.carousel-inner')[0].scrollWidth;
var cardWidth = $('.carousel-item').width();

var scrollPosition = 0;

$('.carousel-control-next').on('click', function(){ 
    // console.log($);
    if(scrollPosition < (carouselWidth - (cardWidth * 4))){
        console.log('pressed');
        scrollPosition = scrollPosition + cardWidth;
        $('.carousel-inner').animate({scrollLeft: scrollPosition}, 600);
    }
  
});
$('.carousel-control-prev').on('click', function(){ 
    if(scrollPosition > 0){
        console.log('next')
        scrollPosition = scrollPosition - cardWidth;
        $('.carousel-inner').animate({scrollLeft: scrollPosition}, 600);
    }
  
});
// });
} else { 

}


// jQuery(document).ready(function($) {
//     var $carouselInner = $('.carousel-inner');
//     var $carouselItems = $('.carousel-item');
//     var cardWidth = $carouselItems.outerWidth(true); // Get the width including margin
//     var scrollPosition = 0;

//     // Calculate the total scrollable width of the carousel
//     var carouselWidth = $carouselInner[0].scrollWidth;

//     $('.carousel-control-next').on('click', function() {
//         // Ensure we do not scroll past the end of the carousel
//         if (scrollPosition + cardWidth < carouselWidth) {
//             scrollPosition += cardWidth;
//         } else {
//             scrollPosition = carouselWidth - $carouselInner.width(); // Adjust to stay within bounds
//         }
//         $carouselInner.animate({ scrollLeft: scrollPosition }, 600);
//     });
// });
