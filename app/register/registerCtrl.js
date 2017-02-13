(function(){
    function registerCtrlFn(){
        var vm = this;
        vm.user={
            firstName:""
        };
        vm.register=function(){
            console.log(vm.user);
        }
    };
    angular.module("register")
    .controller("registerCtrl",[registerCtrlFn]);
})();