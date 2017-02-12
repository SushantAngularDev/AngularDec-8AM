(function(){
    
    angular.module("header",[]);
    
    angular.module("header")
    .config(function(){
        console.log("i am header config() method...");
    })
    .run(function(){
        console.log("i am the header run() meyhod...");
    });
})();