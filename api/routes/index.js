const express = require('express'),
	  router  = express.Router();

const ctrlWeathers = require('./controllers/weathers.controller');

// router('/api/weather')

// router
// 	.route('/json')
// 	.get((req, res)=>{
// 		res.json({mthod:'json get'})
// 	})
// 	.post((req, res)=>{
// 		res.json({mthod:'json post'})
// 	})




module.exports = router	