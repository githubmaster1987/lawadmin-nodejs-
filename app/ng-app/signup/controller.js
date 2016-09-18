angular.module('lawAdmin.signup', []);

angular.module('lawAdmin.signup').config(['$routeProvider', function($routeProvider) {

		$routeProvider
			.when("/signup", {
				controller: 'signupController',
				templateUrl: 'ng-app/signup/view.html',
			});
	}
]);

angular.module('lawAdmin.signup').controller('signupController', function ($scope, $location, $rootScope, $cookieStore, signupFactory) {
	$rootScope.bodyClass = 'login-page';
	$rootScope.title = "Law Admin | Signup";

	/** Process Login If All good  */
	$scope.doSignup = function (allGood) {
		if(allGood) {
			signupFactory.processSignup($scope.user)
				.success(function (response) {
					$location.path("/login");
				})
				.error(function (response, code) {
					if(code === 401) {
						alert("Invalid credentials. Please try again.");
					} else if ( code === 408 ) {
						alert("Error while adding a user.");
					} else if ( code === 409 ) {
						alert("Existing user.");
					} else if ( code === 500 ) {
						alert("Server Error");
					} else {
						alert("Error while signup!");
					}
				});
		}
	};
});