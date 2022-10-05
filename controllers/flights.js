const Flight = require('../models/flight')
const Ticket = require('../models/ticket');

module.exports = {
    index,
    new: newFlight,
    create,
    show
}

function index(req, res) {
    Flight.find({}).sort({departs: 1}).exec(function(err, flights) {
        console.log(flights)
        res.render('flights/index', {flights})
    })
}

function newFlight(req, res) {
    const newFlight = new Flight()
    const dt = newFlight.departs
    let departsDate = `${dt.getFullYear()}-${(dt.getMonth() + 1).toString().padStart(2, '0')}`
    departsDate += `-${dt.getDate().toString().padStart(2, '0')}T${dt.toTimeString().slice(0, 5)}`
    res.render('flights/new', { departsDate });
}

function create(req, res) {
    const flight = new Flight(req.body)
    flight.save(function(err) {
        if(err) {
            console.log(err)
            return res.redirect('flights/new')
        }
        res.redirect('/flights')
    })
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        Ticket.find({flight: flight._id}, function(err, tickets) {
            console.log('flight', flight, "tickets", tickets)
            res.render('flights/show', { title: 'Flight Detail', flight, tickets })
        });
    });
}