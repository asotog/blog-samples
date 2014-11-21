'use strict';

/**
 * @ngdoc function
 * @name angularConstantsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularConstantsApp
 */
angular.module('angularApp.MainCtrl', ['angularApp.settings'])
	.controller('MainCtrl', ['$scope', 'settings',
		function ($scope, settings) {

			console.info(settings);

  }]);