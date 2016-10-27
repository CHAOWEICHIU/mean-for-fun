var   expect = require('chai').expect
	, request = require('request')
	, Weather = require('../../api/controllers/weathers.controller').weatherClass;


describe('Weather Constructor', ()=>{
	
	describe('getWeather()', ()=>{
		var weather, zipCode;
		before(()=>{
			newWeather = new Weather();
			zipCode = 48340;
		})

		it('zipCode:48320 should return statusCode:200, name:Pontiac', (done)=>{
			newWeather.getWeather(zipCode, (response)=>{
				expect(response.statusCode).to.equal(200)
				expect(response.data.name).to.equal('Pontiac')
				done()
			})
		})

		it('should should return DC weather if zipcode is not found in database', (done)=>{
			zipCode = 0
			newWeather.getWeather(zipCode, (response)=>{
				expect(response.statusCode).to.equal(200)
				expect(response.data.name).to.equal('Washington, D. C.')
				done()
			})
		})


	})

})