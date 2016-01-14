
var parseUtil = {
	init: function(){
		Parse.initialize("RQvHu2aeobFJWidwwym8gV007XmOzqlURzay1c8t", "HmVVwwoXMt8G0tTmiRnhvHhYP3aUxStr0kh1FXXu");
	},
	isLoggedIn: function(){
		//returns a boolean
	},
	logout: function(){

	},
	registerUser: function(){

	},
	sendMessage: function(msgOptions){

	},
	getMessagesArray: function(){
		
	},
	countMessagesReceived: function(){
		//used to trigger new message notifications
		//returns a number
	},
	requestConnection: function(){

	},
	viewConnectionRequests: function(){
		//connection requests become confirmed or rejected
		//rejected connection requests are archived in parse but not available to the user
		//acceped connection requests will move the user from the request to the connection status
		//connection request will then exit the connection request status and move to confirmed or rejected
	},
	confirmConnection: function(){
		//move user to connection status
	},
	rejectConnection: function(){	
		//reject connection request
	},
	getConnectionsArray: function(){
		//shows all accepted connections
	},
	getUserInfo: function(){
		//gets info on currently logged in user
	},
	userVerified: function(){
		//checkt to see if the user is verified to use the app
	}
}

/*
var TestObject = Parse.Object.extend("TestObject");
var testObject = new TestObject();
testObject.save({foo: "bar"}).then(function(object) {
  alert("yay! it worked");
});
*/