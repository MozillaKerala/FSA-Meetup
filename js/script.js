$(document).ready(function(){

	// Init global DOM elements, functions and arrays
	window.app							= {el : {}, fn : {}};
	app.el['window']					= $(window);
	app.el['document']					= $(document);
	app.el['back-to-top']				= $('.back-to-top');
	app.el['html-body']					= $('html,body');
	app.el['accordion']					= $('#accordion');
	app.el['reg-btn']					= $('.reg-btn');
	app.el['register']					= $('#register');
    
	//Scroll cover Register button to Registration section
		var pos = app.el['register'].position();
		app.el['reg-btn'].click(function () {
      app.el['html-body'].animate({
        scrollTop: pos.top
      }, 1500);
      return false;
    });

    //Change glyphicon on accordion on toggle
    app.el['accordion'].on('hide.bs.collapse show.bs.collapse', function (n) {
    	$(n.target).siblings('.panel-heading').find('span.glyphicon')
    	.toggleClass('glyphicon-plus glyphicon-minus');
    });

	//Fade in .back-to-top
	$(window).scroll(function () {
		if ($(this).scrollTop() > 640) {
			app.el['back-to-top'].fadeIn();
		} else {
			app.el['back-to-top'].fadeOut();
		}
	});

	//Scroll to Top
	app.el['back-to-top'].click(function () {
		app.el['html-body'].animate({
			scrollTop: 0
		}, 1500);
		return false;
	});

});