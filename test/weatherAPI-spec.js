var chai = require('chai'),
	request = require('request'),
	Weather = require('../api/controllers/weathers.controller'),
	expect = chai.expect;







describe('weather', ()=>{
	it('.getWeather() should return weather infor', (done)=>{
		let weather = new Weather();
		let zipCode = 48340
		weather.getWeather(zipCode, (response)=>{
			expect(response.statusCode).to.equal(200)
			expect(typeof response.data).to.equal('object')
			done()
		})
	})
	it('.getWeather() should return DC weather if zipcode is not found in database', (done)=>{
		let weather = new Weather();
		let zipCode = 0
		weather.getWeather(zipCode, (response)=>{
			expect(response.statusCode).to.equal(200)
			expect(response.data.name).to.equal('Washington, D. C.')
			done()
		})
	})

})




// describe('hood', ()=>{
// 	it('should pass', (done)=>{
// 		let apiRequest = new ApiRequest();
		
// 		apiRequest.getData(url, key , zip, (good)=>{
// 			console.log()
// 			expect(typeof good).to.equal('object')
// 			done()
// 		})

// 	})
// })