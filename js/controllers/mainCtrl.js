'use strict';

angular.module('jetPath')
	.controller('mainCtrl', function($scope, $http, mainService) {

		//methods
			//Call API - Get JSON

		mainService.getJobs(function(response) {
			console.log(response.data);
			$scope.jobs = response.data;
		})

		

		// API call to GET objects
	});
