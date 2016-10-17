'use strict'

var _ = require('underscore')
var expect = require('chai').expect



function toTitleCase(input){
	return input
			.split(' ')
			.map(i => i[0].toUpperCase() + i.substring(1).toLowerCase())
			.join(' ') 
}

function checkZipCode(input){
	let output = String(input).split('')
	if(output.length === 5)return true
	return false
}





describe.only('custom function', ()=>{
	var greetingString = 'HOw aRe YOU ? dd dasl ?dd'
	it('how are you should return How Are You', ()=>{
		expect(toTitleCase(greetingString)).to.equal('How Are You ? Dd Dasl ?dd')
	})
	it('return true', ()=>{
		expect(checkZipCode('48340')).to.equal(true)
	})

	it('return false', ()=>{
		expect(checkZipCode('4834a')).to.equal(true)
	})
	it('return false', ()=>{
		expect(checkZipCode('4834')).to.equal(false)
	})
	it.only('return true', ()=>{
		expect(checkZipCode(24834)).to.equal(true)
	})

})
