var dataUtil = {};

var Api = {
	testTokenAuth: function(){
		

		$.ajax({
			url: 'http://192.241.247.128:8080/api/memberinfo',
			type: 'get',
			headers: {
                "Authorization": dataUtil.jwt
            },
			success: function(results){
				steroids.logger.log(results);
			},
			error: function(error){
							steroids.logger.log(error);
						steroids.logger.log('token error implement auth');
			}
		});

		// /memberinfo
		// res success:true || success: false 
		// res message:

	}
};

var Springboard = {
	init: function(){
		steroids.view.navigationBar.hide();
		var jwt = localStorage.getItem('jwt');
		dataUtil.jwt = jwt;
		Springboard.attachHandlers();
	},
	attachHandlers: function(){
		$('.springboard-button').click(function(e){
			e.preventDefault();
			Api.testTokenAuth();
		});
	}

};

document.addEventListener('deviceready', Springboard.init, false);