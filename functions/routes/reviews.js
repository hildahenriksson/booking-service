const express = require('express');
const router = express.Router();
const uuid = require('uuid')
const customerReviews = require('../resources/customer-reviews.json')

router.get('/', (req, res) => {
    res.send(customerReviews);
});

router.post('/', (req, res) => {
    console.log('post');

    const newReview = {
        id: uuid.v4(),
        name: req.body.name,
        content: req.body.content,
        stars: req.body.stars
    }

    customerReviews.push(newReview);
    console.log(customerReviews);
    res.redirect('/')
});

module.exports = router;