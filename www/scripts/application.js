function setModal(){
	$('.modal').modal('show');
	$('.modal-title').append('Login Error');
	$('.modal-body').append('Your email and password do not match our records. Please try again');
	$('.modal-footer').append('<button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>');
}

var App = {
	init: function(){

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

document.addEventListener('deviceready', App.attachRegisterLink, false)