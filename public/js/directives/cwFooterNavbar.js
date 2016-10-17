angular.module('myApp')
	.directive('cwFooterNavbar', cwFooterNavbar)

function cwFooterNavbar(){
	return {
		restrict: 'E',
		templateUrl: 'templates/cwFooterNavbar.html'
	}
}
