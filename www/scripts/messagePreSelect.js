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

			// for( var i = 0; i < CONTACTS.length; i++){

			// 	$('#contact').append('<option>' + i + '</option>');
			// }

		


			$('#messageModal').modal('show');
			$('.message-body').append('I feel ' + listFeelingText);

		


			
		});
	}
};

messagePreSelect.init();