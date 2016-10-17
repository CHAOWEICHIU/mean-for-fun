'use strict'

require('./api/models/db.js')

const express = require('express'),
	  app 	= express(),
	  path  = require('path'),
	  cookieParser = require('cookie-parser'),
	  bodyParser = require('body-parser'),
	  routers = require('./api/routes'),
	  PORT 		= process.env.PORT || 3000;

app.use(cookieParser('helloo'))
app.use(bodyParser.urlencoded({ extended: false }))

app.use(routers)


// logger
// app.use((req,res,next)=>{
// 	console.log(req.method, req.url)
// 	next()
// })

app.use('/api', routers)

// serve static file
app.use('/public', express.static(path.join(__dirname, 'public')))
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')))






app.get('/', (req, res)=>{
	res
		.cookie('encrypted2', 'tobi', { signed: true })
		.cookie('encrypted1', 'tobi')
		.status(200)
		.sendFile(path.join(__dirname, 'public', 'index.html'));
})



app.listen(PORT, ()=>console.log(`listening on port: ${PORT}`))
