$(document).ready(function () {

	var 	$anim1 = $('#animation-1'),
          		$anim2 = $('#animation-2'),
          		$anim3 = $('#animation-3');

          		$anim1.click(function () {
          			$('.right').toggleClass('wink').delay(3500).queue(function() {  // Wait for it...
            			$(this).removeClass('wink').dequeue(); // aaaand it's gone!
       			});
			$('.head').toggleClass('rotate').delay(3500).queue(function() {  // Wait for it...
            			$(this).removeClass('rotate').dequeue(); // aaaand it's gone!
       			});
          		});

          		$anim2.click(function () {
          			$('.right').toggleClass('flag-right r-flaggy').delay(5500).queue(function() {  // Wait for it...
            			$(this).removeClass('flag-right r-flaggy').dequeue(); // aaaand it's gone!
       			});
			$('.left').toggleClass('flag-left l-flaggy').delay(5500).queue(function() {  // Wait for it...
            			$(this).removeClass('flag-left l-flaggy').dequeue(); // aaaand it's gone!
       			});
          		});
});