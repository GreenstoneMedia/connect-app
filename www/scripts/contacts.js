
var contacts = {
	init: function(){
		steroids.view.navigationBar.hide();
		contacts.attachEvtHandlers();
	},
	attachEvtHandlers: function(){
		$('.contact-link').click(function(e){
			e.preventDefault();
			var view = new supersonic.ui.View('conversations.html');
			supersonic.ui.layers.push(view);

		});

		$('#addContactBtn').click( function (e) {
			e.preventDefault();
			var view = new supersonic.ui.View('requestContact.html');
			supersonic.ui.layers.push(view);
		})
	}
};

contacts.init();