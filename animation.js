$(document).ready(function () {

	var 	$anim1 = $('#animation-1'),
          		$anim2 = $('#animation-2'),
          		$anim3 = $('#animation-3');

          		$anim1.click(function () {
          			$('.right').toggleClass('wink').delay(3001).queue(function() {  // Wait for it...
            			$(this).removeClass('wink').dequeue(); // aaaand it's gone!
       			});
			$('.head').toggleClass('rotate').delay(3001).queue(function() {  // Wait for it...
            			$(this).removeClass('rotate').dequeue(); // aaaand it's gone!
       			});
          		});

          		$anim2.click(function () {
          			$('.right').toggleClass('flag-right r-flaggy').delay(4001).queue(function() {  // Wait for it...
            			$(this).removeClass('flag-right r-flaggy').dequeue(); // aaaand it's gone!
       			});
			$('.left').toggleClass('flag-left l-flaggy').delay(4001).queue(function() {  // Wait for it...
            			$(this).removeClass('flag-left l-flaggy').dequeue(); // aaaand it's gone!
       			});
          		});

              $anim3.click(function () {
      //           $('.right').toggleClass('r-balls').delay(4500).queue(function() {  // Wait for it...
      //             $(this).removeClass('r-balls').dequeue(); // aaaand it's gone!
      //       });
      // $('.left').toggleClass('l-balls').delay(4500).queue(function() {  // Wait for it...
      //             $(this).removeClass('l-balls').dequeue(); // aaaand it's gone!
      //       });
      $('.leg').toggleClass('anim').delay(6050).queue(function() {  // Wait for it...
                  $(this).removeClass('anim').dequeue(); // aaaand it's gone!
            });
      $('.eyes').toggleClass('anim').delay(6200).queue(function() {  // Wait for it...
                  $(this).removeClass('anim').dequeue(); // aaaand it's gone!
            });
      $('.arms').toggleClass('moon').delay(6100).queue(function() {  // Wait for it...
                  $(this).removeClass('moon').dequeue(); // aaaand it's gone!
            });
      $('.android').toggleClass('moonwalk').delay(6500).queue(function() {  // Wait for it...
                  $(this).removeClass('moonwalk').dequeue(); // aaaand it's gone!
            });

              });
});