(function ($) {
  $(function () {

    $('.sidenav').sidenav();
    $('.modal').modal();
    $('.tabs').tabs();
    $('.collapsible').collapsible();
    $('.carousel').carousel({
      dist: 0,
      shift: 50,
      numVisible: 3,
      duration: 100,
    });
    $('.right').click(function() {
      $('.carousel').carousel('next');
    });
    $('.left').click(function() {
      $('.carousel').carousel('prev');
    });
    $('.tooltipped').tooltip();
    $('.tooltipped').click(function() {
      $(this).open();
    })
    M.updateTextFields();
    $('select').formSelect();
  }); // end of document ready
})(jQuery); // end of jQuery name space
// $('.partnery-slider').slick({
//   dots: false,
//   infinite: true,
//   speed: 300,
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   centerMode: true,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         infinite: true,
//         dots: true
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
//     // You can unslick at a given breakpoint now by adding:
//     // settings: "unslick"
//     // instead of a settings object
//   ]
// });
$(function(){
	$nav = $('nav');
	// $nav.css('width', $nav.outerWidth());
	$window = $(window);
	$h = $nav.offset().top;
	$window.scroll(function(){
		if ($window.scrollTop() > $h) {
			$nav.addClass('white');
		} else {
			$nav.removeClass('white');
		}
	});
});