const express = require('express');
const router = express.Router();
const bookedTimes = require('../resources/booked-times.json')

router.get('/', (req, res) => {
    res.send(bookedTimes);
});

router.post('/', (req, res) => {
    console.log('post');

    const newBooking = {
        "id": "4",
        "name": "Jennie",
        "date": "2023-10-30",
        "service": "Fönsterputs"
    }

    bookedTimes.push(newBooking);
    console.log(bookedTimes);
    res.redirect('/')
});

module.exports = router;