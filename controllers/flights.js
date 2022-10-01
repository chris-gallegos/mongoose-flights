const Flight = require('../models/flight')

module.exports = {
    index,
    new: newFlight,
    create
}

function index(req, res) {
    Flight.find({}, function(err, flights) {
        console.log(flights)
        res.render('flights/index', {flights})
    })
}

function newFlight(req, res) {
    res.render('flights/new')
}

function create(req, res) {
    let flightNo = req.body.flightNo
    if (flightNo <= 10 && flightNo >= 9999) {
        flightNo === true
    }
    const flight = new Flight(req.body)
    flight.save(function(err) {
        if(err) {
            console.log(err)
            return res.redirect('flights/new')
        }
        res.redirect('/flights')
    })
}