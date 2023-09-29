const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors')
app.use(
   cors({
      origin: "*"
   })
)
app.get('/', (req, res) => {
   res.json({status: "ok"});
});

const bookingRouter = require('./routes/bookings')
const serviceRouter = require('./routes/services')
const reviewRouter = require('./routes/reviews')

app.use('/booking', bookingRouter)
app.use('/services', serviceRouter)
app.use('/review', reviewRouter)

module.exports = app;