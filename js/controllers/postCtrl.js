'use strict';

angular.module('jetPath')
	.controller('postCtrl', function($scope) {

	console.log('this is post ctrl');
	
	$scope.postJob = function(job) {
			$scope.job.title = job.title;
			$scope.job.description = job.description;
			$scope.job.city = job.city;
			$scope.job.country = job.country;
			$scope.job.qualifications = job.qualifications;
			$scope.job.low = job.low;
			$scope.job.high = job.high;
			$scope.job.benefits = job.benefits;
			$scope.job.airfare = job.airfare;
			$scope.job.housing = job.housing;
			$scope.job.medical = job.medical;
			$scope.job.pto = job.pto;
			$scope.job.sick = job.sick;
			$scope.job.additionalinfo = job.additionalinfo;
			$scope.job.apply = job.apply;
	};

});