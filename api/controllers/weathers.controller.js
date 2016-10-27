'use strict'

const request = require('request');

function Weather(){
	let weatherApiUrl 	= 'http://api.openweathermap.org/data/2.5/weather',
		key				= '33b2a6da65679ee4e4289d8831ff6f81'
	this.getWeather = (zipCode, done) => {
		let requestUrl = `${weatherApiUrl}?APPID=${key}&zip=${zipCode},us`
		request(requestUrl, (error, res, body)=>{
			if(error || res.statusCode !== 200) return done({statusCode: res.statusCode, error: error})
			done({statusCode:res.statusCode, data:JSON.parse(body)})
		})
	}
}

module.exports.weatherClass = Weather;

// module.exports.getWeather = (req, res)=>{
// 	let weather = new Weather();
// 	let zip = req.query.zip || 0
// 	weather.getWeather(zip, (info)=>{
// 		if(info.statusCode !== 200)return res.json('Nope!')
// 		res.json(info.data)
// 	})
// }