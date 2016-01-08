function setModal(){
	$('.modal').modal('show');
	$('.modal-title').append('Login Error');
	$('.modal-body').append('Your email and password do not match our records. Please try again');
	$('.modal-footer').append('<button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>');
}

var App = {
	init: function(){
	    $( ".container-fluid" ).hide();
	    var splash = document.getElementById( "splash" );
	    var show = function() {
	      splash.style.display = "block";
	      setTimeout( hide, 2150 ); // 2.5 seconds
	    }
	    var hide = function() {
	      $(splash).fadeOut();
	      //FIX ME: remove line below 
	      //localStorage.removeItem( 'initial-info-box-flag' );
	      // if( localStorage.getItem( 'initial-info-box-flag' ) !== null ){
	      //   var infoBoxOptions = {
	      //   message: "With this SwingShift Hotels app you get to pick your check-in time! \nAfter you select an available hotel and room you will be asked to select when you would like to check-in.\nYour check out is automatically set to 24 hours later.\n We call it the flex rate. You may just call it freedom!\n",
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
	test: function(){
		var testP = document.getElementById('test');
		var newContent = document.createTextNode('Hi there and greetings!'); 
		testP.appendChild(newContent);
	},
	testJquery: function(){
		$('#test').append('Hi there and jquery');
	},
	testBtn: function(){
		$('#loginBtn').click( function(e){
			e.preventDefault();
			setModal();
		});
	},
	attachRegisterLink: function(){
		$('#registrationLink').click(function(e){
			e.preventDefault();
			var view = new supersonic.ui.View('register.html');
			supersonic.ui.layers.push(view);
		});
	},
	attachRegisterBtn: function(){
		$('#registerBtn').click( function(e){
			e.preventDefault();
			setModal();
		});
	}
};

document.addEventListener('deviceready', App.init, false)