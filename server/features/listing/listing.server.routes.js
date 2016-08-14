var listingCtrl = require('./listing.server.ctrl');

module.exports = function (app) {

	app.post('/api/v1/listing', listingCtrl.postListing);
	app.get('/api/v1/listings', listingCtrl.getListings);

	app.route('/api/v1/listing/:id')
		.put(listingCtrl.editListing)
		.delete(listingCtrl.deleteListing)

};
