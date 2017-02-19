(function () {

	angular.module("register", []);

	angular.module("register")
		.config(function () {
			console.log("i am the register module config() method...");
		})
		.run(function () {
			console.log("i am the register module run() methd...");
		});
})();