(function(){
    function registerCtrlFn(lookupSvc){
        var vm = this;
        vm.user={
            firstName:""
        };
        vm.register=function(){
            console.log(vm.user);
        }
        vm.countries=lookupSvc.getCountries();
        console.log(vm.countries);
         
        vm.selectedCountry = lookupSvc.defaultCountry();
        
    };
    angular.module("register")
    .controller("registerCtrl",["lookupSvc",registerCtrlFn]);
})();