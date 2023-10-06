const bookedTimes = require('../resources/booked-times.json');
const crypto = require('crypto');

exports.create_booking = (req, res) => {
  const newBooking = {
    id: crypto.randomUUID(),
    name: req.body.name,
    date: req.body.date,
    startTime: req.body.startTime,
    service: req.body.service
  };

  bookedTimes.push(newBooking);
  res.redirect('/');
};

exports.get_all_bookings = (req, res) => {
  res.send(bookedTimes);
};

exports.put_booking = (req, res) => {
  const id = req.params.id;
  const bookingToUpdate = bookedTimes.find(item => item.id === id);

  if (bookingToUpdate) {
    bookingToUpdate.name = req.body.name;
    bookingToUpdate.date = req.body.date;
    bookingToUpdate.startTime = req.body.startTime;
    bookingToUpdate.duration = req.body.duration;
    bookingToUpdate.service = req.body.service;

    res.send(`Updated booking ID: "${id}"`);
  } else {
    res.status(404).send(`Updated booking ID: "${id}"`);
  }
};

exports.delete_booking = (req, res) => {
  const id = req.params.id;
  const bookingToDelete = bookedTimes.find(item => item.id === id);
  const index = bookedTimes.indexOf(bookingToDelete);

  if (index !== -1) {
    bookedTimes.splice(index, 1);
    console.log('Deleted booking: ' + id);
    res.send(`Booking with id "${id}" was deleted.`);
  } else {
    res.status(404).send(`Booking with id "${id}" was not found.`);
  }
};
