'use strict'

require('./api/models/db.js')

const express 		= require('express')
	, app 			= express()
	, path  		= require('path')
	, cors  		= require('cors')
	, cookieParser 	= require('cookie-parser')
	, bodyParser 	= require('body-parser')
	, session 		= require('express-session')
	, passport 		= require('passport')
	, routersAPI 	= require('./api/routes/api')
	, routersAuth 	= require('./api/routes/auth')
	, morgan    	= require('morgan')
	, PORT 			= process.env.PORT || 3000;

app.use(morgan('dev'))
app.use(cookieParser('helloo'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.set('views', __dirname + '/public')


app.use(session({ 
	secret: 'good',
	resave: true,
	saveUninitialized: true 
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions


app.use('/api', routersAPI)
app.use('/auth', routersAuth)


// serve static file

app.use(express.static(path.join(__dirname, 'public')))
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')))



app.listen(PORT, ()=>console.log(`listening on port: ${PORT}`))
