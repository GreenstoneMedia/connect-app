var Springboard = {
	init: function(){

	var leftButton = new supersonic.ui.NavigationBarButton( {
  		imagePath:"/images/icons/user.png",
  		onTap: function() {
    	supersonic.ui.dialog.alert("Left button tapped!");
  		}
});

options = {
  title: "John",
  overrideBackButton: true,
  buttons: {
    left: [leftButton]
  }
}


		
		steroids.view.navigationBar.update( options );
	}
}
document.addEventListener('deviceready', Springboard.init, false);