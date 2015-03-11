$(function() {

	// when menu is clicked, add is-open class. When clicked again, remove class
	
	$('.go-to-nav').click(function() {
		var $nav = $('nav ul');
		var state = $nav.hasClass('is-expanded');

		if(state === false) { // is not expanded

			$nav.addClass('is-expanding');
			$nav.on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function () {
				$nav.addClass('is-expanded');	
				$nav.removeClass('is-expanding');				
			});

		}else { // is already expanded

			$nav.addClass('is-collapsing');	
			$nav.on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function () {
				$nav.removeClass('is-expanded is-collapsing');
			});		
			
		}

	});

});
