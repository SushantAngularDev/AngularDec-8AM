(function(){
    
    //module creation
    //first param: Module Name
    //second params: module names injected.
    angular.module("goodServices",["header"]);
    
   //consuming the module
    angular.module("goodServices")
    .config(function(initProvider){
        console.log("I m the goodServices config()...");
    })
    .run(function(){
        console.log("I m the good services run function");
    })
    .provider("init",function(){
        console.log("i am the goodServices provider-good injected to config()...");
        this.$get=function(){
            
        };
    });
    
})();