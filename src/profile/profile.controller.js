(function () {
	angular.module('meanApp').controller('profileCtrl', profileCtrl);
	profileCtrl.$inject = ['$location', 'meanData'];

	function profileCtrl($location, meanData) {
		var vm = this;
		vm.user = {};
		meanData.getProfile().then(function onSuccess(response) {
			vm.user = response.data;
		}).catch(function onError(e) {
			console.log(e);
		});
	}
})();