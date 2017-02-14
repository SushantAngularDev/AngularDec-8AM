(function(){
    
    function productCtrlFn(productSvc){
		var vm=this;
        productSvc.getProductFromJson()
		.then(function(res){
			console.log(res);
			vm.products=res.data.products;
		})
		.catch(function(err){
			console.log(err)
		})
    }
    
    angular.module("product")
    .controller("productsCtrl",["productService",productCtrlFn])
})();