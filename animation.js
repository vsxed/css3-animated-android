$(document).ready(function () {

	var 	$anim1 = $('#animation-1'),
          		$anim2 = $('#animation-2'),
          		$anim3 = $('#animation-3');

          		$anim1.click(function () {
          			event.preventDefault();
          			$('.right').toggleClass('wink').delay(3500).queue(function() {  // Wait for it...
            			$(this).removeClass('wink').dequeue(); // aaaand it's gone!
       			});
			$('.head').toggleClass('rotate').delay(3500).queue(function() {  // Wait for it...
            			$(this).removeClass('rotate').dequeue(); // aaaand it's gone!
       			});
          		});

          		$anim2.click(function () {
          			event.preventDefault();
          			$('.right').toggleClass('flag-right').delay(2500).queue(function() {  // Wait for it...
            			$(this).removeClass('flag-right').dequeue(); // aaaand it's gone!
       			});
			$('.left').toggleClass('flag-left').delay(2500).queue(function() {  // Wait for it...
            			$(this).removeClass('flag-left').dequeue(); // aaaand it's gone!
       			});
          		});
});