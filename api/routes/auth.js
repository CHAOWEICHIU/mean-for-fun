'use strict'

const express = require('express')
	, router  = express.Router()
    , passport = require('passport')
    , googleCtrl = require('../controllers/passport.controller')
    , checkCtrl = require('../controllers/check.controller')
    


router
	.route('/user')
	.get(checkCtrl.login, (req,res)=>{
		res.status(200).send(req.user)
	})

router
	.route('/google')
	.get(googleCtrl.googleAuth);


router
	.route('/google/callback')
	.get(passport.authenticate('google', {successRedirect : '/#/',failureRedirect : '/#/login'}))




module.exports = router	

