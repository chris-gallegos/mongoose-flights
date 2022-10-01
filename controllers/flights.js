const Flight = require('../models/flight')

module.exports = {
    index
}

function index(req, res) {
    Flight.find({}, function(err, flights) {
        console.log(flights)
        res.render('flights/index', {flights})
    })
}