let   expect = require('chai').expect,
	  request = require('request'),
	  nock   = require('nock'),
	  url 	 = 'http://localhost:3000/api/notes';


describe.only('ctrlNotes', ()=>{
	let _id, notesResponse;
	let form = {
		title: 'new Title?',
		content: 'good job?????',
		created_user: 'ccw'
	};

	before((done)=>{
		request.get(url, (err, res)=>{
			notesResponseBody = JSON.parse(res.body)
			notesResponse = res
			done()
		})
	})




	it('.nodesGetAll() should return all notes', ()=>{
			expect(notesResponse.statusCode).to.equal(200)
			expect(typeof notesResponseBody.length).to.equal('number')
	})

	it('.nodesAddOne() should have +1 after successfully added', (done)=>{
		request.post({
			url: url,
			form: {
				title: form.title,
				content: form.content,
				created_user: form.created_user
			}
		}, (err, res)=>{
			_id = JSON.parse(res.body)._id
			expect(res.statusCode).to.equal(201)

			request.get(url, (err, res)=>{
				expect(notesResponseBody.length + 1).to.equal(JSON.parse(res.body).length)
				done()
			})
		})
	})

	it('.nodesAddOne() should return 400 for bad request', (done)=>{
		request.post({ url:url, form:{ title: 'only'}}, (err, res, body)=>{
			expect(res.statusCode).to.equal(400)
			done()
		})
	})


	it('.noteGetOne() should return 200 after successfully got one', (done)=>{
		request.get(`${url}/${_id}`, (err, res)=>{
			expect(res.statusCode).to.equal(200)
			done()
		})
	})

	it('.noteGetOne() should return 404 with proer error message if id was not found', (done)=>{
		request.get(`${url}/1111`, (err, res)=>{
			expect(res.statusCode).to.equal(404)
			expect(JSON.parse(res.body).error).to.equal('CastError')
			done()
		})
	})
	
	it('.update() should return 200 after successfully removed', (done)=>{
		request.put({ url:`${url}/${_id}`, form:{ title: 'change', content:'c', created_user:'cc'}}, (err, res)=>{
			expect(res.statusCode).to.equal(200)
			done()
		})
	})

	it('.update() should return 404 with proer error message if id was not found', (done)=>{
		request.put({ url:`${url}/2222`, form:{ title: 'change', content:'c', created_user:'cc'}}, (err, res)=>{
			expect(res.statusCode).to.equal(404)
			done()
		})
	})

})