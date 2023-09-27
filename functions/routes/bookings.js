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
    res.redirect('/')
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const bookingToDelete = bookedTimes.find(item => item.id === id);
    const index = bookedTimes.indexOf(bookingToDelete)

    if (index !== -1) {
        bookedTimes.splice(index, 1);
        console.log('Deleted booking: ' + id)
        res.send(`Booking with id "${id}" was deleted.`);
    } else {
        res.status(404).send(`Booking with id "${id}" was not found.`);
    }
})

module.exports = router;