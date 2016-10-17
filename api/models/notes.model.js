'use strict';

const mongoose = require('mongoose');

var notesSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	content:{
		type: String,
		required: true
	},
	created_user:{
		type: String,
		required: true
	},
	created_at:{
		type: Date,
		"default": Date.now()
	}
})

module.exports = mongoose.model('Note', notesSchema, 'notes')
