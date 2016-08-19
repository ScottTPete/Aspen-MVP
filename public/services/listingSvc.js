angular.module('AspenApp')
  .service('listingSvc', function ($http) {


    this.postListing = function (listing) {
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
