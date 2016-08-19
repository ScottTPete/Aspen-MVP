angular.module('AspenApp')
	.directive('newListing', function () {
		return {
			restrict: 'E'
			, templateUrl: './directives/postListingModal/newListingModal.html'
		}

	});
