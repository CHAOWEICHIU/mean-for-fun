const express = require('express'),
	  router  = express.Router();

const ctrlWeathers = require('../controllers/weathers.controller');

router
	.route('/api/weather')
	.get(ctrlWeathers.getWeather)








module.exports = router	