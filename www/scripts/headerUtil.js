var headerUtil = {
	init: function(){
		headerUtil.attachEvtHandlers();
	},
	attachEvtHandlers: function(){
	//home handle
		$('#homeBtn').click(function(e){
			e.preventDefault();
			var view = new supersonic.ui.View('home.html');
			supersonic.ui.layers.push(view);
		});
	//mail handle
		$('#mailBtn').click(function(e){
			e.preventDefault();
			var view = new supersonic.ui.View('contacts.html');
			supersonic.ui.layers.push(view);
		});
	//contact handle
		$('#contactsBtn').click(function(e){
			e.preventDefault();
			var view = new supersonic.ui.View('requestContact.html');
			supersonic.ui.layers.push(view);
		});
	//settings
		$('#settingsBtn').click(function(e){
			e.preventDefault();
			var view = new supersonic.ui.View('account.html');
			supersonic.ui.layers.push(view);
		});
	}


};

headerUtil.init();
