import $ from 'jquery'

module.exports = {
	sendCommand : function(paramsObj, callback){
		$.ajax({
				type: 'POST',
				url: '/api/sendCommand',
				// Provide correct Content-Type, so that Flask will know how to process it.
				contentType: 'application/json',
				data: JSON.stringify(paramsObj),
				// This is the type of data you're expecting back from the server.
				dataType: 'json',
			})
			.done((data) => {
				callback(data);
			})
		 
	},
	
};