(function(){
    angular.module("common",[]);
    
    angular.module("common")
    .config(function(){
        console.log("i am common config() method..");    
    })
    .run(function(){
        console.log("i am common run() method..");
		});
})();