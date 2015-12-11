//Not using Service because GET is being handled in the Controller

'use strict';

angular.module('jetPath')

	//insert http provider to handle all http requests
	.service('mainService', function($http) {

		//method - Calls API
		this.getJobs = function(callback){
			// API goes here 
			$http.get('https://api.doughnuts.ga/doughnuts')
				.then(callback);
		};
	});