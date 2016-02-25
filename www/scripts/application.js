var setModal = {
	display: function(title, msg, elem){
		$('#login-modal').modal('show');
		// $('.modal-title').append(title);
		// $('.modal-body').append('Your email and password do not match our records. Please try again');
		// $('.modal-footer').append('<button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>');
	}
};

var userAuth = {
	isLoggedIn: function(){

	},
	getLoginInfo: function(){
		console.log('getLoginInfo');
		var username = $('#inputEmail').val();
		var passwd = $('#inputPassword').val();
		var reqType = 'POST';
		if(username === ''){
			alert('Please enter email address');
			return;
		}
		if(passwd === ''){
			alert('Please enter password');
			return;
		}
		this.submitLoginInfo(username, passwd, reqType);
	},
	submitLoginInfo: function(username, passwd, reqType){
		var URL = 'http://192.241.247.128:8080/api/authenticate';
		$.ajax({
			url: URL,
			type: reqType,
			data: {name:username,password:passwd},
			success: function(results){
				steroids.logger.log(results);
				if(results.success === false){
					setModal.display();
				}
				if(results.success === true){
					//FIX ME: store the token in ls!!
					localStorage.setItem('jwt', results.token);
					var view = new supersonic.ui.View('home.html');
					supersonic.ui.layers.push(view);
				}
			},
			error: function(error){
				steroids.logger.log(error);
			}
		});

	},
	logout: function(){

	},
	register: function(){

	},
	getUser: function(){

	}
};

var App = {
	init: function(){
		//D E B U G : R E M O V E  O N  D E P L O Y
		//auto load screens below
		var view = new supersonic.ui.View('messagePreSelect.html');
		supersonic.ui.layers.push(view);
		//E N D  D E B U G

		App.attachClickHandlers();
		//this.testParse();
	    $( ".container-fluid" ).hide();
	    var splash = document.getElementById( "splash" );
	    var show = function() {
	      splash.style.display = "block";
	      setTimeout( hide, 2150 ); // 2.5 seconds
	    }
	    var hide = function() {
	      $(splash).fadeOut();
	      //	*****************************************************************************
	      //				the below function allows for a 1 time alert when
	      //				a user first uses the application
	      //	*****************************************************************************
	      //FIX ME: remove line below 
	      //localStorage.removeItem( 'initial-info-box-flag' );
	      // if( localStorage.getItem( 'initial-info-box-flag' ) !== null ){
	      //   var infoBoxOptions = {
	      //   message: "With this app do this \nAfter you get a new line do this",
	      //   buttonLabel: "Got it!"
	      //   };
	      //   supersonic.ui.dialog.alert( "Flex with Swing Shift!", infoBoxOptions ).then( function() {
	      //     localStorage.setItem( 'initial-info-box-flag' , 'true' );
	      //   });
	      // }
	      $( ".container-fluid" ).fadeIn();
	    }
	    show();
	},
	attachClickHandlers: function(){
		App.attachRegisterClick();
		App.attachLoginClick();
	},
	test: function(){
		var testP = document.getElementById('test');
		var newContent = document.createTextNode('Hi there and greetings!'); 
		testP.appendChild(newContent);
	},
	attachLoginClick: function(){
		$('#loginBtn').click(function(e){
			e.preventDefault();
			//test login
				userAuth.getLoginInfo();
			//end login
			//var view = new supersonic.ui.View('home.html');
			//supersonic.ui.layers.push(view);
		});
	},
	attachRegisterClick: function(){
		$('#registrationLink').click(function(e){
			e.preventDefault();
			var view = new supersonic.ui.View('register.html');
			supersonic.ui.layers.push(view);
		});
	}
};

document.addEventListener('deviceready', App.init, false)