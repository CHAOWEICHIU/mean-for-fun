'use strict'

const express = require('express')
	, router  = express.Router();

const ctrlWeathers 	= require('../controllers/weathers.controller')
	, ctrlNotes 	= require('../controllers/notes.controller')
	, checkCtrl = require('../controllers/check.controller')

router
	.route('/weather')
	.get(ctrlWeathers.getWeather)

router
	.route('/notes')
	.post(checkCtrl.login, ctrlNotes.notesAddOne)
	.get(ctrlNotes.notesGetAll)

router
	.route('/notes/:id')
	.get(ctrlNotes.notesGetOne)
	.delete(checkCtrl.login ,ctrlNotes.notesRemoveOne)
	.put(checkCtrl.login, ctrlNotes.notesUpdateOne)






module.exports = router	