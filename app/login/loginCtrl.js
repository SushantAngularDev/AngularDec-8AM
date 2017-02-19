(function () {

	function loginCtrlFn($scope) {
		//var vm = this;
		$scope.user = {

		}
		$scope.logIn = function () {
			console.log(vm.user);
		}

	}

	angular.module("login")
		.controller("loginCtrl", ["$scope", loginCtrlFn]);
})();
