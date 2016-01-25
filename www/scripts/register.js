var RenderHeader = function(){
	var options = {
  	titleImagePath: "/images/logotype_hdr@2x.png"
};

steroids.view.navigationBar.update( options );
};

var Registration = {
	init: function(){
		RenderHeader();
	}

}

document.addEventListener('deviceready', Registration.init, false)