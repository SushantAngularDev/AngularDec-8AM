(function () {
	function registerCtrl(lookupSvc) {
		var vm = this;
		
		/* DatePicker Object*/
		vm.dob = {
			format: "MM/dd/yyyy",
			popup1: {
				opened: false
			},
			dateOptions: {
				dateDisabled: disabled ,
				formatYear: 'yy',
				maxDate: new Date(2017, 5, 22),
				minDate: new Date(),
				startingDay: 1
			},
		};
		
		vm.open1 = function () {
            vm.dob.popup1.opened = true;
        };
		function disabled(data) {
            var date = data.date,
                mode = data.mode;
            return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
        }
		vm.user = {
			firstName: ""
		};
		
		vm.register = function () {
				console.log(vm.user);
			}
			// vm.countries = lookupSvc.getCountries();
		vm.errMsg = {
			color: "red"
		};
		vm.DobRange = {
			maxdate: "-18Y"
		};
		vm.DateofReser = {
			mindate: "0D",
			maxdate: "+1M"
		};
		lookupSvc.getCountries().then(function (res) {
				console.log(res);
			}).catch(function (err) {
				console.log(err);
			})
			//vm.selectedCountry = lookupSvc.defaultCountry();
			/* angular.forEach( vm.countries, function(item){
			    if(item.code=="IN"){
			        //vm.selectedCountry=item;
			    }
			 })*/
			//get country list from json file
		lookupSvc.getCountriesFromJson().then(function (res) {
			console.log(res);
			vm.countries = res.data.countries;
		}).catch(function (err) {
			console.log(err);
		})
	}
	angular.module("register").controller("registerCtrl", ["lookupService", registerCtrl]);
})();