'use strict';

angular.module('jetPath')
	.controller('postCtrl', function($scope) {

	console.log('this is post ctrl');
	
	$scope.postJob = function(job) {
			$scope.job.title = job.title;
			$scope.job.description = job.description;
			$scope.job.locationCity = job.locationCity;
			$scope.job.locationCountry = job.locationCountry;
			$scope.job.qualifications = job.qualifications;
			$scope.job.salaryLow = job.salaryLow;
			$scope.job.salaryHigh = job.salarayHigh;
			$scope.job.benefitsDescription = job.benefitsDescription;
			$scope.job.benefitsAirfare = job.benefitsAirfare;
			$scope.job.benefitsHousing = job.benefitsHousing;
			$scope.job.benefitsMedical = job.benefitsMedical;
			$scope.job.benefitsPto = job.benefitsPto;
			$scope.job.benefitsSick = job.benefitsSick;
			$scope.job.additionalinfo = job.additionalinfo;
			$scope.job.apply = job.apply;
		//NEED TO SEND JOB OBJECT TO RAILS TO AUTHENTICATE
	};


});