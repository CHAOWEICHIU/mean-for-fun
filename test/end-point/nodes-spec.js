const expect = require('chai').expect
	, request = require('request')
	, mongoose = require('mongoose')
	, localhost = `http://localhost:3000`;

describe.only(`${localhost}/api/notes`, ()=>{
	let oneNote;


	it('GET All should statusCode 200 ', (done)=>{
		request(`${localhost}/api/notes`, (err, res)=>{
			oneNote = JSON.parse(res.body)[0]
			expect(res.statusCode).to.equal(200)
			done()
		})
	})

	it('GET One should return statusCode 200 ', (done)=>{
		request(`${localhost}/api/notes/${oneNote._id}`, (err, res)=>{
			expect(res.statusCode).to.equal(200)
			done()
		})	
	})

	it('Without Auth, POST should get statusCode 401', ()=>{
		request.post({
			url:`${localhost}/api/notes`, 
			form: {title:'ho'}
		}, (err,res,body)=>{ 
			expect(res.statusCode).to.equal(401)
		})
	})

	it('Without Auth, PUT should get statusCode 401', ()=>{
		
		request.put({
			url:`${localhost}/api/notes/23333`,
			form: {title: 'good'}
		}, (err,res,body)=>{ 
			expect(res.statusCode).to.equal(401)
			
		})
	})


	it('Without Auth,, DELETE should get statusCode 401', ()=>{
		request.delete({
			url:`${localhost}/api/notes/2222}`
		}, (err,res,body)=>{ 
			expect(res.statusCode).to.equal(401)
		})
		
	})

	

})


