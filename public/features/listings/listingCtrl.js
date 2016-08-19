angular.module('AspenApp')
  .controller('listingCtrl', function ($scope, listingSvc, listings) {

    $scope.isActive = false;

    console.log(listings[0])

    $scope.listings = listings;

    $scope.openNewModal = function () {
      $scope.isActive = !$scope.isActive;
    }

    $scope.closeModal = function () {
      $scope.isActive = !$scope.isActive;
    }


  });
