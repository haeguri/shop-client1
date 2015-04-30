angular.module('radio.controller')

	.controller('TabsCtrl', function($scope, $ionicSlideBoxDelegate, $ionicHistory, $state) {

		$scope.tabs = {};

		$scope.tabs.clearCache = function() {
			$ionicHistory.clearCache()
		}
	});