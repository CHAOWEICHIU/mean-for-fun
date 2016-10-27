const expect = require('chai').expect
	, request = require('request')
	, mongoose = require('mongoose')
	, localhost = `http://localhost:3000`;

describe.only(`${localhost}/api/notes`, ()=>{
	let createdNote;


	it('GET should statusCode 200 ', (done)=>{
		request(`${localhost}/api/notes`, (err, res)=>{
			expect(res.statusCode).to.equal(200)	
			done()
		})
	})

	it('POST should get statusCode 201', (done)=>{
		let newNote = {
			title: 'zzzzwo!',
			content: 'Yo!!',
			created_user: 'ccw'
		}
		request.post({
			url:`${localhost}/api/notes`, 
			form: newNote
		}, (err,res,body)=>{ 
			createdNote = JSON.parse(body)
			expect(res.statusCode).to.equal(201)
			done()
		})
	})

	it('PUT should get statusCode 200', (done)=>{
		let updateNote = {
			title: 'zzzzwo!',
			content: 'Yo!!',
			created_user: 'ccwcczzz'
		}
		request.put({
			url:`${localhost}/api/notes/${createdNote._id}`,
			form: updateNote
		}, (err,res,body)=>{ 
			expect(res.statusCode).to.equal(200)
			done()
		})
	})


	it('DELETE should get statusCode 200', (done)=>{
		request.delete({
			url:`${localhost}/api/notes/${createdNote._id}`
		}, (err,res,body)=>{ 
			expect(res.statusCode).to.equal(200)
			done()
		})
		
	})

	

})


