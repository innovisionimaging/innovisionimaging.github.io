
// jQuery(document).ready(function($) {
// var carouselWidth = $('.carousel-inner')[0].scrollWidth;
// var cardWidth = $('.carousel-item').width();

// var scrollPosition = 0;

// $('.carousel-control-next').on('click', function(){ 
//     console.log($);
//     scrollPosition = scrollPosition + cardWidth;
//     $('.carousel-inner').animate({scrollLeft: scrollPosition}, 600);
// // });
// // });

// let items = document.querySelectorAll('.carousel .carousel-item')

// 		items.forEach((el) => {
// 			const minPerSlide = 4
// 			let next = el.nextElementSibling
// 			for (var i=1; i<minPerSlide; i++) {
// 				if (!next) {
//             // wrap carousel by using first child
//             next = items[0]
//         }
//         let cloneChild = next.cloneNode(true)
//         el.appendChild(cloneChild.children[0])
//         next = next.nextElementSibling
//     }
// })