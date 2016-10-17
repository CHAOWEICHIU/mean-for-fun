'use strict'

const express = require('express'),
	  router  = express.Router();

const ctrlWeathers 	= require('../controllers/weathers.controller'),
	  ctrlNotes 	= require('../controllers/notes.controller');

router
	.route('/weather')
	.get(ctrlWeathers.getWeather)

router
	.route('/notes')
	.post(ctrlNotes.notesAddOne)
	.get(ctrlNotes.notesGetAll)

router
	.route('/notes/:id')
	.get(ctrlNotes.notesGetOne)
	.delete(ctrlNotes.notesRemoveOne)
	.put(ctrlNotes.notesUpdateOne)






module.exports = router	