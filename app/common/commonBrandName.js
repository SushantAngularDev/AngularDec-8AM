(function () {

	function cmBrandNameFn() {
		return {
			template: '<a class="navbar-brand" href="#">{{hc.brandName}}</a>',
			link: function (scope, Element, attrs) {
				console.log(scope);
				console.log(Element);
				console.log(attrs);
			}
		}
	}

	angular.module("common")
		.directive("cmBrandName", [cmBrandNameFn]);
})();
