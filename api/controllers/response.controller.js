

 function handleResponseError(err, done){
	
	let errorMessage = {
		error: '',
		message: '',
		statusCode: ''
	}

	switch(err.name){
		case 'ValidationError':
			errorMessage.error = 'ValidationError';
			errorMessage.statusCode = 400;
			errorMessage.message = 'Please check your submitted information again';
			break;

		case'CastError':
			errorMessage.error = 'CastError';
			errorMessage.statusCode = 404;
			errorMessage.message =  `${err.value} Not Found`;
			break;
		
		case'DeleteNotFound':
			errorMessage.error = 'DeleteNotFound';
			errorMessage.statusCode = 404;
			errorMessage.message =  `${err.value} Not Found`;
			break;

		default: 
			errorMessage.error = 'unknown error';
			errorMessage.statusCode = 500;
			errorMessage.message =  `err`;
	}

	done(errorMessage)
}
	

function handleResponse(err, res, doc, statusCode){
	if(err){
		handleResponseError(err, (message)=>{
			res.status(message.statusCode).json(message)
		})
	}	
	

	switch(statusCode){
		case 201:
			res.status(201).json(doc);
			break;
	
		default:
			res.status(200).json(doc);

	}
}



module.exports = {
	handleResponseError : handleResponseError,
	handleResponse 		: handleResponse 
}