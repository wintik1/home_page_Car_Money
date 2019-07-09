/* Sass Document */

$('.promo_img').slick({
	dots: true,
	arrows: false
});

var miniHeaderActive = document.getElementById('mini_header');







window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
	/*document.getElementById('b').innerHTML = scrolled;*/
	if(scrolled >= 300) {
		miniHeaderActive.classList.add('mini_header_active');
	
	}
	if(scrolled < 300) {
	miniHeaderActive.classList.remove('mini_header_active');
	
	}
	
	
	
	
	$('#link_on').click(function(){
		$('.block_hidden_on').css('display', "block");
		return false;
	});
	$('#link_off').click(function(){
		$('.block_hidden_on').css('display', 'none');
		return false;
	});

	$('#ran').on('change', function(){
    
		$('#sum').val($('#ran').val());
		
		
		
});
	
	
};

