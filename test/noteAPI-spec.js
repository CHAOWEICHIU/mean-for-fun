// let   expect = require('chai').expect,
// 	  request = require('request'),
// 	  nock   = require('nock'),
// 	  url 	 = 'http://localhost:3000/api/notes';


// describe(`End Point: ${url}`, ()=>{
// 	let _id, notesResponse;
// 	let form = {
// 		title: 'new Title?',
// 		content: 'good job?????',
// 		created_user: 'ccw'
// 	};

// 	before((done)=>{
// 		request.get(url, (err, res)=>{
// 			notesResponseBody = JSON.parse(res.body)
// 			notesResponse = res
// 			done()
// 		})
// 	})


// 	it('Method: GET should return 200', ()=>{
// 			expect(notesResponse.statusCode).to.equal(200)
// 			expect(typeof notesResponseBody.length).to.equal('number')
// 	})

// 	it('Method: POST should return 201 after successfully created', (done)=>{
// 		request.post({
// 			url: url,
// 			form: {
// 				title: form.title,
// 				content: form.content,
// 				created_user: form.created_user
// 			}
// 		}, (err, res)=>{
// 			_id = JSON.parse(res.body)._id
// 			expect(res.statusCode).to.equal(201)
// 			request.get(url, (err, res)=>{
// 				expect(notesResponseBody.length + 1).to.equal(JSON.parse(res.body).length)
// 				done()
// 			})
// 		})
// 	})

// 	it('Method: POST should return 400 for insufficient info with proper error message', (done)=>{
// 		request.post({ url:url, form:{ title: 'only'}}, (err, res, body)=>{
// 			expect(res.statusCode).to.equal(400)
// 			expect(JSON.parse(body).error).to.equal('ValidationError')
// 			done()
// 		})
// 	})

// 	it('Method: GET should return 200 for correct _id', (done)=>{
// 		request.get(`${url}/${_id}`, (err, res, body)=>{
// 			expect(res.statusCode).to.equal(200)
// 			expect(JSON.parse(body)._id).to.equal(_id)
// 			done()
// 		})
// 	})

// 	it('Method: GET should return 404 for incorrect _id with proper error message ', (done)=>{
// 		let incorrectId = '13f1dasfas'
// 		request.get(`${url}/${incorrectId}`, (err, res, body)=>{
// 			expect(res.statusCode).to.equal(404)
// 			expect(JSON.parse(res.body).error).to.equal('CastError')
// 			expect(JSON.parse(res.body).message).to.equal(`${incorrectId} Not Found`)
// 			done()
// 		})
// 	})
	
// 	it('Method: DELETE should return 200 after successfully deleted', (done)=>{
// 		request.delete({ url:`${url}/${_id}`}, (err, res)=>{
// 			expect(res.statusCode).to.equal(200)
// 			expect(JSON.parse(res.body).message).to.equal('removed successfully')
// 			done()
// 		})
// 	})

// 	it('Method: DELETE should return 404 for incorrect _id with proper error message', (done)=>{
// 		let incorrectId = 'sadml1e213em'
// 		request.delete({ url:`${url}/${incorrectId}`}, (err, res)=>{
// 			expect(res.statusCode).to.equal(404)
// 			expect(JSON.parse(res.body).error).to.equal('DeleteNotFound')
// 			expect(JSON.parse(res.body).message).to.equal(`${incorrectId} Not Found`)
// 			done()
// 		})
// 	})



// })