(function(){
	
	function cmHeaderFn(){
		return{
			templateUrl:'app/header/header.tpl.html',
			restrict:'A,C,E'
		}
		
	}
	
	angular.module("common")
	.directive("cmHeader",[cmHeaderFn]);
})();