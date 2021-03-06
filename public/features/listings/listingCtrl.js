angular.module('AspenApp')
  .controller('listingCtrl', function ($scope, listingSvc, listings) {

    $scope.isActive = false;

    console.log(listings[0]);

    $scope.listings = listings;

    $scope.listing = {};

    $scope.categories = listingSvc.getCategories();
    console.log($scope.categories);

    $scope.selected = $scope.categories[0]


    $scope.openNewModal = function () {
      $scope.isActive = !$scope.isActive;
    };

    $scope.closeModal = function () {
      $scope.isActive = !$scope.isActive;
      $scope.listing = {};
    };

    $scope.postListing = function (newListing) {
      console.log(newListing);
      listingSvc.postListing(newListing);
    };


  });
