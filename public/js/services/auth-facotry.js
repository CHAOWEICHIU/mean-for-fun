angular.module('myApp').factory('AuthFactory',AuthFactory);

function AuthFactory(){
	return {
		isLoggedIn: false
	}
}