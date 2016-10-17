angular.module('myApp').controller('WeatherCtrl', WeatherCtrl)

function WeatherCtrl($http, $scope){
	var vm = this;
	var url = 'https://ccw-dashboard.herokuapp.com/api/weather'
	this.greeting = 'hello from weather ctrl'

	$scope.$watch('vm.zipcode', (newvalue, oldvalue)=>{
		if(checkZipCode(newvalue)){
			$http.get(`${url}?zip=${newvalue}`)
				.then((res)=>{
				vm.start = 'start to make request'
				vm.name = res.data.name
			})
		} else {
			vm.start = ''
			vm.name = '??'
		}
		
		
	})
	function checkZipCode(input){
		let output = String(input).split('')
		if(output.length === 5)return true
		return false
	}
	vm.res = 'not yet'

	$http({
		method: 'GET',
		url: `${url}?zip=48340`,
		headers:{
			'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With'
		}
	})
	.success(function(d){ 
		vm.res = 'Yes'
	})
    .error(function(d){ 
    	vm.res = 'Nope'
    	console.log('Nope'); 
    });

	
}