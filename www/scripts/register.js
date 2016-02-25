

var RenderStateSelect = function(){
	var states = [{text:"", value:""},{text:"AK", value: "AK"},{text:"AL", value: "AL"},{text:"AR", value: "AR"},{text:"AS", value: "AS"},{text:"AZ", value: "AZ"},{text:"CA", value: "CA"},{text:"CO", value: "CO"},{text:"CT", value: "CT"},{text:"DC", value: "DC"},{text:"DE", value: "DE"},{text:"FL", value: "FL"},{text:"GA", value: "GA"},{text:"GU", value: "GU"},{text:"HI", value: "HI"},{text:"IA", value: "IA"},{text:"ID", value: "ID"},{text:"IL", value: "IL"},{text:"IN", value: "IN"},{text:"KS", value: "KS"},{text:"KY", value: "KY"},{text:"LA", value: "LA"},{text:"MA", value: "MA"},{text:"MD", value: "MD"},{text:"ME", value: "ME"},{text:"MI", value: "MI"},{text:"MN", value: "MN"},{text:"MO", value: "MO"},{text:"MS", value: "MS"},{text:"MT", value: "MT"},{text:"NC", value: "NC"},{text:"ND", value: "ND"},{text:"NE", value: "NE"},{text:"NH", value: "NH"},{text:"NJ", value: "NJ"},{text:"NM", value: "NM"},{text:"NV", value: "NV"},{text:"NY", value: "NY"},{text:"OH", value: "OH"},{text:"OK", value: "OK"},{text:"OR", value: "OR"},{text:"PA", value: "PA"},{text:"RI", value: "RI"},{text:"SC", value: "SC"},{text:"SD", value: "SD"},{text:"TN", value: "TN"},{text:"TX", value: "TX"},{text:"UT", value: "UT"},{text:"VA", value: "VA"},{text:"VI", value: "VI"},{text:"VT", value: "VT"},{text:"WA", value: "WA"},{text:"WI", value: "WI"},{text:"WV", value: "WV"},{text:"WY", value: "WY"}];
	states.forEach(function(obj){
		$('#state').append('<option value="' + obj.value + '">' + obj.value + '</option>');
	});
};

var RenderStep2EmailPasswd = function(){
	//hide current form
	//show email - pwd - conf pwd form
	$('#step1').hide();
	$('#step2').show();
	$('#finishBtn').click(function(e){
		e.preventDefault();
		alert('process');
		var pass = $("#inputPassword").val();
		var passMatch = $("#confirmPassword").val();
		var userEmail = $("#inputEmail").val();

		if(pass !== passMatch){
			alert('Passwords do not match. Please try again');
			$(pass).val('');
			$(passMatch).val('');
			$(pass).css('border' , '1px solid red');
			return;
		}

		 if(pass === ''){
		 	alert('Please fill in both passwords');
		 	$(pass).css('border' , '1px solid red');
		 	return;
		 }

		 if(userEmail === ''){
		 	alert('Please enter your email');
		 	$(userEmail).css('border' , '1px solid red');
		 	return;
		 };

		 registerUserAPI();

	});
};

function registerUserAPI(){
	var firstName = $('#first-name').val(); 
	var lastName = $('#last-name').val();
	var line_one = $('#address').val();
	var city = $('#city').val();
	var state = $('#state').val(); 
	var zip = $('#zip').val(); 
	var phone =  $('#phone-input').val();
	var email = $('#inputEmail').val();
	var passwd = $("#inputPassword").val();


// var dataModelRegister = {

//   name: email,
//   password: passwd,
//     firstName: firstName,
//     lastName: lastName,
//     createdAt: '',
//       address: {
//     line_one:line_one,
//     city:city,
//     state:state,
//     zip:zip
//   },
//   meta: {
//     email:'',
//     phone:phone
//   }

// };

	//use mongoose model
	var payload = {
		name: email,
		password: passwd,
		firstName: firstName,
		lastName: lastName,
		address: {
			line_one:line_one,
			city:city,
			state:state,
			zip:zip
		},
		meta: {
			email:email,
			phone:phone
		}
	};

	steroids.logger.log(payload);

	// var postData = JSON.stringify(payload);
	var URL = 'http://192.241.247.128:8080/api/signup';
		$.ajax({
			url: URL,
			type: "POST",
			data: payload,
			success: function(results){
				steroids.logger.log(results);
				if(results.success === false){
					alert('registration error');
				}
				if(results.success === true){
					alert('user registered');
					//send to home.html
					var view = new supersonic.ui.View('home.html');
					supersonic.ui.layers.push(view);

				}
			},
			error: function(error){
				steroids.logger.log(error);
				alert('connectivity error');
			}
		});
};


var Registration = {
	init: function(){
		steroids.view.navigationBar.hide();
		RenderStateSelect();
		$('#proceedToRegisterStep2').click( function(e){
			e.preventDefault();
			//make sure all fields have values
			var firstName = $('#first-name').val(); 
			var lastName = $('#last-name').val();
			var line_one = $('#address').val();
			var city = $('#city').val();
			var state = $('#state').val(); 
			var zip = $('#zip').val(); 
			var phone =  $('#phone').val(); 
			if(firstName === ''){
				$('#first-name').css('border' , '1px solid red'); 
				alert('you must fill in all fields');
				return;
			}

			if(lastName === '' ){
				$('#last-name').css('border' , '1px solid red');
				alert('you must fill in all fields');
				return;
			}
			if(line_one === '' ){
				$('#address').css('border' , '1px solid red');
				alert('you must fill in all fields');
				return;
			}
			if(city === '' ){
				$('#city').css('border' , '1px solid red');
				alert('you must fill in all fields');
				return;
			}
			
			if(state === '' ){
				$('#state').css('border' , '1px solid red'); 
				alert('you must fill in all fields');
				return;
			}
			if(zip === '' ){
	 			$('#zip').css('border' , '1px solid red'); 
	 			alert('you must fill in all fields');
				return;
			}
			if(phone === '' ){
	 			$('#phone').css('border' , '1px solid red');
	 			alert('you must fill in all fields');
				return;
			}
			//D E B U
			RenderStep2EmailPasswd();
		});
	}

};

document.addEventListener('deviceready', Registration.init, false);