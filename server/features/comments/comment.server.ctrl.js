var Comment = require('./commentModel'),
  Listing = require('../listing/listingModel');

module.exports = {

    postComment: (req, res) => {
        console.log(req.body);
        Comment.create(req.body, (err, comment) => {
            if (err) {
                console.log(err);
                res.status(500).send(err);
            } else {
                Listing.findByIdAndUpdate(comment.ref, {
                    $addToSet: {
                        'comments': comment._id
                    }
                }, (err, listing) => {
                    if (err) {
                        res.status(500).send(err);
                    } else {
                        res.status(200).send(listing);
                    }
                });
            }
        });
    },
    getComments: (req, res) => {
        Comment.find(req.query).populate().exec((err, comments) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(comments);
            }
        });
    },
    editComment: (req, res) => {
        Comment.findByIdAndUpdate(req.params.id, req.body, (err, comment) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(comment);
            }
        });
    },
    deleteComment: (req, res) => {
        Comment.findByIdAndRemove(req.params.id, (err, comment) => {
            if (err) {
                res.status(500).send(err);
            } else {
                Listing.findByIdAndUpdate(comment._id, {
                    $pull: {
                        'comments': comment._id
                    }
                }, (err, event) => {
                    if (err) {
                        res.status(500).send(err);
                    }
                    res.status(200).send(event);
                });
            }
        });
    }
};
