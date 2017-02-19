/*(function(){
    
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
*/
(function () {
	function productsCtrlFn(productsSvc) {
		var vm = this;
		productsSvc.getProductFromJson().then(function (res) {
			console.log(res);
			vm.products = res.data.products;
		}).catch(function (err) {
			console.log(err);
		});
		vm.minimumProducts = 10;
		vm.showMore = function () {
			vm.minimumProducts += 10;
		};
		vm.orderByCrietria = "Price";
		vm.orderByPrice = function () {
			if (vm.orderByCrietria == "Price") {
				vm.orderByCrietria = "-Price";
			}
			else {
				vm.orderByCrietria = "Price";
			}
		}
	}
	angular.module("product").controller("productsCtrl", ["productService", productsCtrlFn]);
})();