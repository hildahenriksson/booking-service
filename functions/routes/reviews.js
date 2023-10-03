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

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const reviewIndex = customerReviews.findIndex(review => review.id === id);

    if (reviewIndex !== -1) {
        customerReviews.splice(reviewIndex, 1);
        res.status(200).json({ message: 'Review deleted' });
    } else {
        res.status(404).json({ message: 'Review not found' });
    }
});

module.exports = router;