angular.module('myApp').controller('WeatherCtrl', WeatherCtrl)

function WeatherCtrl($http, $scope){
	var vm = this;
	var url = 'https://ccw-dashboard.herokuapp.com/api/weather'
	this.greeting = 'hello from weather ctrl'

	$scope.$watch('vm.zipcode', (newvalue, oldvalue)=>{
		if(checkZipCode(newvalue)){
			$http.get(`${url}?zip=${newvalue}`)
				.then((res)=>{httpReq()})
		} else {
			vm.name = '??'
		}
		
		
	})
	function checkZipCode(input){
		let output = String(input).split('')
		if(output.length === 5)return true
		return false
	}
	vm.res = 'not yet'
	var httpReq = function(zipcode){
		$http({
			method: 'GET',
			url: `${url}?zip=${zipcode}`,
			headers:{
				'Access-Control-Allow-Origin': '*',
	            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
	            'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With'
			}
		})
		.success(function(d){ 
			vm.name = d.name
			vm.res = 'Yes'
		})
	    .error(function(d){ 
	    	vm.res = 'Nope'
	    });	
	}
	

	
}