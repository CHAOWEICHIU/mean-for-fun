'use strict'

const mongoose = require('mongoose')
	, configDB = require('../config/database')

var dbUrl = configDB.url




mongoose.connect(dbUrl);
var connection =  mongoose.connection

connection.on('connected',()=>{
	console.log('Connected to ' + dbUrl)
})

connection.on('disconnected',()=>{
	console.log('Mongoose Disconnected ')
})

connection.on('error',(err)=>{
	console.log('Mongoose connection error: '+err)
})

process.on('SIGINT', ()=>{
	mongoose.connection.close(()=>{
		console.log('DB disconnected via termination (SIGIN)')
		process.exit(0)
	})
})

// For heroku termination
process.on('SIGTERM', ()=>{
	mongoose.connection.close(()=>{
		console.log('DB disconnected via termination (SIGTERM)')
		process.exit(0)
	})
})

process.once('SIGUSR2', ()=>{
	mongoose.connection.close(()=>{
		console.log('DB disconnected via termination (SIGUSR2)')
		process.kill(process.pid, 'SIGUSR2')
	})
})


// Bring in model
require('./notes.model.js')