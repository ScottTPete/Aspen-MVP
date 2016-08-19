angular.module('AspenApp')
  .service('listingSvc', function ($http) {

    let categorgies = ["Baseball", "Football", "Lacrosse", "Basketball", "Lifting", "Sprints", "Tennis", "Golf", "Hockey", "Soccer", "Volleyball", "Boxing", "MMA", "Softball", "Swimming"];

    this.getCategories = function () {
      return categorgies;
    }

    this.postListing = function (listing) {
      console.log(listing)
      return $http.post('/api/v1/listing', listing);
    };

    this.getListings = function () {
      return $http.get('/api/v1/listings').then(function (response) {
        console.log(response);
        var listings = response.data;

        return listings;
      })
    }

    this.editListing = function (listing, listingId) {
      return $http.put('/api/v1/listing/' + listingId, listing)
    };

    this.deleteListing = function (listingId) {
      $http.delete('/api/v1/listing/' + listingId)
    };



  });
