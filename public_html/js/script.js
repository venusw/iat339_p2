// when menu is clicked, add is-open class. When clicked again, remove class

$(function() {

	$('.go-to-nav').on('click', function() {
		$('nav').toggleClass('is-expanded');
	});

});
