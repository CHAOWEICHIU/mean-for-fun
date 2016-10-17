angular.module('myApp').controller('WeatherCtrl', WeatherCtrl)

function WeatherCtrl($http, $scope){
	var vm = this;
	this.greeting = 'hello from weather ctrl'

	$scope.$watch('vm.zipcode', (newvalue, oldvalue)=>{
		if(checkZipCode(newvalue)){
			$http.get(`http://localhost:3000/api/weather?zip=${newvalue}`)
				.then((res)=>{
				vm.name = res.data.name
			})
		} else {
			vm.name = '??'
		}
		
		
	})
	function checkZipCode(input){
		let output = String(input).split('')
		if(output.length === 5)return true
		return false
	}

	
}