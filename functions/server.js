const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(
  cors({
    origin: "*"
  })
);
app.get('/', (req, res) => {
  res.json({ status: "ok" });
});

const bookingRouter = require('./routes/bookings');
const serviceRouter = require('./routes/services');
const reviewRouter = require('./routes/reviews');
const userRouter = require('./routes/user-information');

app.use('/booking', bookingRouter);
app.use('/services', serviceRouter);
app.use('/review', reviewRouter);
app.use('/user', userRouter);

module.exports = app;
