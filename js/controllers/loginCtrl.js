'use strict';

angular.module('jetPath')
	.controller('loginCtrl', function($scope) {

		console.log('this is login ctrl');

		$scope.candidate = {
			email: '',
			password: ''
		};

		$scope.loginCandidate = function(user) {
			$scope.candidate.email = user.email;
			$scope.candidate.password = user.password;

			//NEED TO SEND THIS DATA TO RAILS TO AUTHENTICATE
		};

		$scope.loginEmployer = function(user) {
			$scope.employer.email = user.email;
			$scope.employer.password = user.password;

			//NEED TO SEND THIS DATA TO RAILS TO AUTHENTICATE
		};

	});