var _ = require('underscore')
var expect = require('chai').expect



function toTitleCase(input){
	return input
			.split(' ')
			.map(i => i[0].toUpperCase() + i.substring(1).toLowerCase())
			.join(' ') 
}






describe('custom function', ()=>{
	var greetingString = 'HOw aRe YOU ? dd dasl ?dd'
	it('how are you should return How Are You', ()=>{
		expect(toTitleCase(greetingString)).to.equal('How Are You ? Dd Dasl ?dd')
	})

})
