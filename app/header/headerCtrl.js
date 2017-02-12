(function(){
    function headerCtrlFn()
    {
        var vm=this;
        vm.brandName="Good Services";
        vm.navItems=["login","register","products"];
        vm.loginTemplate ="app/login/login.tpl.html";
        vm.registerTemplate ="app/register/register.tpl.html";
        vm.productsTemplate="app/product/product.tpl.html";
        
        vm.loadView=function(param)
        {
         console.log(param);
         if(param=="login"){
                vm.loadTemplate=vm.loginTemplate;
            }
            else if(param=="register"){
                vm.loadTemplate=vm.registerTemplate;
            }
            else if(param=="products"){
                vm.loadTemplate=vm.productsTemplate;
            }
        };
        
    }
	
    angular.module("header")
    .controller("headerCtrl",[headerCtrlFn]); 
})();