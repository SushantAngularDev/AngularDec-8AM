(
	function(){
		
	   function productServiceFn($q,$http){
		   
		this.getProductFromJson=function(){
		//step 1
		var dfd=$q.defer();
		$http.get("api/products.json")
		.then(function(responce){
			console.log(responce);
			dfd.resolve(responce);
			
		})
		.catch(function(err){
			console.log(err);
			
		});
		return dfd.promise;
	}
}
	angular.module("product")
	.service("productService",["$q","$http",productServiceFn]);
})();