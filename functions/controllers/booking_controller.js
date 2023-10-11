const bookedTimes = require('../resources/booked-times.json');
const crypto = require('crypto');

exports.create_booking = (req, res) => {
  try {
    const newBooking = {
      id: crypto.randomUUID(),
      name: req.body.name,
      date: req.body.date,
      startTime: req.body.startTime,
      duration: req.body.duration,
      service: req.body.service
    };
    bookedTimes.push(newBooking);
    res.status(201).redirect('/');
  } catch (error) {
    res.status(500).send('Something went wrong');
  };
};

exports.get_all_bookings = (req, res) => {
  try {
    res.status(200).send(bookedTimes);
  } catch (error) {
    res.status(500).send('Something went wrong');
  };
};

exports.put_booking = (req, res) => {
  try {
    const id = req.params.id;
    const bookingToUpdate = bookedTimes.find(item => item.id === id);

    if (bookingToUpdate) {
      bookingToUpdate.name = req.body.name;
      bookingToUpdate.date = req.body.date;
      bookingToUpdate.startTime = req.body.startTime;
      bookingToUpdate.duration = req.body.duration;
      bookingToUpdate.service = req.body.service;

      res.status(200).send(`Updated booking with ID: "${id}"`);
    } else {
      res.status(404).send(`Booking with id "${id}" was not found.`);
    }
  } catch (error) {
    res.status(500).send('Something went wrong');
  };
};

exports.delete_booking = (req, res) => {
  try {
    const id = req.params.id;
    const bookingToDelete = bookedTimes.find(item => item.id === id);
    const index = bookedTimes.indexOf(bookingToDelete);

    if (index !== -1) {
      bookedTimes.splice(index, 1);
      console.log('Deleted booking: ' + id);
      res.status(204).send(`Booking with id "${id}" was deleted.`);
    } else {
      res.status(404).send(`Booking with id "${id}" was not found.`);
    }
  } catch (error) {
    res.status(500).send('Something went wrong');
  };
};
