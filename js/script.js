$(document).ready(function(){    
    
    $('#accordion').on('hide.bs.collapse show.bs.collapse', function (n) {
    	$(n.target).siblings('.panel-heading').find('span.glyphicon')
    	.toggleClass('glyphicon-plus glyphicon-minus');
    });

});