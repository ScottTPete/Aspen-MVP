var Listing = require('./listingModel');

module.exports = {

    postListing: (req, res) => {
        Listing.create(req.body, (err, listing) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(listing);
            }
        });
    },
    getListings: (req, res) => {
        Listing.find(req.query).populate('comments').exec((err, listing) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(listing);
            }
        });
    },
    editListing: (req, res) => {
        Listing.findByIdAndUpdate(req.params.id, req.body, (err, listing) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(listing);
            }
        });
    },
    deleteListing: (req, res) => {
        Listing.findByIdAndRemove(req.params.id, (err, listing) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(listing);
            }
        });
    }

};
