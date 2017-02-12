(
   function(){
	
	//create module
	angular.module("goodServices",[]);
	
	angular.module("goodServices")
	.config(function(){
		console.log("i am  goodServices config function");
		})
	.run(function(){
		console.log("i am goodServices run function");
	})
	})();