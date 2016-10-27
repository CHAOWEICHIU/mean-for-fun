const expect = require('chai').expect
	, responseApi = require('../../api/controllers/response.controller')
	, handleResponseError = responseApi.handleResponseError


describe('handleResponseError()', ()=>{
	var err = {name: ''}

	beforeEach(()=>{
		err.name = ''
	})


	it('return proper err message with ValidationError', ()=>{
		err.name = 'ValidationError'
		
		handleResponseError(err, (callback)=>{
			expect(typeof callback).to.equal('object')
			expect(callback.error).to.equal('ValidationError')
			expect(callback.message).to.equal('Please check your submitted information again')
			expect(callback.statusCode).to.equal(400)
		})
	})

	it('return proper err message with CastError', ()=>{
		err.name = 'CastError'
		err.value = '222'

		handleResponseError(err, (callback)=>{
			expect(typeof callback).to.equal('object')
			expect(callback.error).to.equal('CastError')
			expect(callback.message).to.equal(`${err.value} Not Found`)
			expect(callback.statusCode).to.equal(404)

		})
	})
	
	it('return proper err message with DeleteNotFound', ()=>{
		err.name = 'DeleteNotFound'
		err.value = '333'
		handleResponseError(err, (callback)=>{
			expect(typeof callback).to.equal('object')
			expect(callback.error).to.equal('DeleteNotFound')
			expect(callback.message).to.equal(`${err.value} Not Found`)
			expect(callback.statusCode).to.equal(404)
		})
	})

	it('return proper err message with Unknow Err', ()=>{
		err.name = 'Err'
		handleResponseError(err, (callback)=>{
			expect(typeof callback).to.equal('object')
			expect(callback.error).to.equal('unknown error')
			expect(callback.message).to.equal(`err`)
			expect(callback.statusCode).to.equal(500)
		})
	})




})