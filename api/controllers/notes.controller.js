'use strict'

var   mongoose = require('mongoose'),
	  Note = mongoose.model('Note')


function handleResponseError(err, res){
	
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
			console.log('unknow')
	}

	res.status(errorMessage.statusCode).json(errorMessage)
}
	

function handleResponse(err, res, doc, statusCode){
	if(err){ handleResponseError(err, res)} 
	

	switch(statusCode){
		case 201:
			res.status(201).json(doc);
			break;
	
		default:
			res.status(200).json(doc);

	}
}





function Note(){
	this.save = (saveNoteInfo, done) => {
		return done(null ,saveNoteInfo)
	}
}

module.exports.noteClass = Note

module.exports.notesAddOne = (req, res)=>{
	Note.create({
		title: req.body.title,
		content: req.body.content,
		created_user: req.body.created_user
	}, (err, note)=>{
		handleResponse(err, res, note, 201)
	})
}

module.exports.notesGetAll = (req ,res) => {
	Note.find()
		.exec((err, notes)=>{
			res.json(notes)
		})
}

module.exports.notesGetOne = (req, res) => {
	console.log(req.params.id)
	Note.findById(req.params.id)
		.exec((err, note)=>{
			handleResponse(err, res, note)
		})
}

module.exports.notesRemoveOne = (req, res) => {
	Note
		.findById(req.params.id)
		.remove()
		.exec((err, note)=>{
			console.log(note.result.n)
			if(note.result.n == 0){
				handleResponse({name:'DeleteNotFound', value:req.params.id}, res)	
			} else {
				handleResponse(null, res, {statusCode: 200, message:'removed successfully'})
			}
		})
}

module.exports.notesUpdateOne = (req, res) => {
	Note.findById(req.params.id)
		.exec((err, note)=>{
			console.log(req.body)
			if(err){handleResponse(err, res)}
			note.title = req.body.title
			note.content = req.body.content
			note.created_user = req.body.created_user
			note.save((err, updatedFood)=>{
				if(err){handleResponse(err, res)}
				handleResponse(null, res, updatedFood)
			})
		})
}



