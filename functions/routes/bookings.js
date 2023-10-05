const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/booking_controller');

router.post("/", bookingController.create_booking);

router.get("/", bookingController.get_all_bookings);

router.put("/:id", bookingController.put_booking);

router.delete("/:id", bookingController.delete_booking);

module.exports = router;
