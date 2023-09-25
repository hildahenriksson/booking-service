const express = require('express');
const router = express.Router();
const uuid = require('uuid')
const bookedTimes = require('../resources/booked-times.json')

router.get('/', (req, res) => {
    res.send(bookedTimes);
});

router.post('/', (req, res) => {
    console.log('post');

    const newBooking = {
        id: uuid.v4(),
        name: req.body.name,
        date: req.body.date,
        service: req.body.service
    }

    bookedTimes.push(newBooking);
    console.log(bookedTimes);
    console.log(body)
    res.redirect('/')
});

module.exports = router;