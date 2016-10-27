'use strict'

var   mongoose = require('mongoose')
    , Note = mongoose.model('Note')
    , handleResponseError = require('./response.controller').handleResponseError
	, handleResponse = require('./response.controller').handleResponse;



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
			handleResponse(err, res, notes)
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
			// note.result.n <<== item not found 
			if(note.result.n == 0){
				let err = {name:'DeleteNotFound', value:req.params.id}
				handleResponse(err, res)
			} else {
				let message = {statusCode: 200, message:'removed successfully'};
				handleResponse(null, res, message)
			}
		})
}

module.exports.notesUpdateOne = (req, res) => {
	Note.findById(req.params.id)
		.exec((err, note)=>{
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

