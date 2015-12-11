'use strict';

angular.module('jetPath')
	.controller('mainCtrl', function($scope, $http, mainService) {

		//methods
		$scope.getJobs = function() {
			$http.get('https://api.doughnuts.ga/doughnuts')
				.then(function(response) {
					console.log(response.data);
					jobs.all = response.data;
			});
		};

		mainService.getJobs(function(response) {
			console.log(response.data);
			$scope.jobs = response.data;
		})

		// API call to GET objects
	});
