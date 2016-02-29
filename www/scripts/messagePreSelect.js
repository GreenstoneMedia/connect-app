var CONTACTS = ['Bill Olay','Jan Frida'];


var messagePreSelect = {
	init: function(){
		steroids.view.navigationBar.hide();
		messagePreSelect.attachEventHandlers();

	},
	attachEventHandlers: function(){
		$('.list-group-item').click( function(e){
			e.preventDefault();
			var listFeelingText = $(this).html();
			//will need to store a few things in ls

			var view = new supersonic.ui.View('message.html');
			supersonic.ui.layers.push(view);
		});

		$('#customMessageBtn').click(function(e){
			e.preventDefault();
			var view = new supersonic.ui.View('message.html');
			supersonic.ui.layers.push(view);
		});
	}
};

messagePreSelect.init();