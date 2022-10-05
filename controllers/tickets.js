const Ticket = require('../models/ticket');
const Flight = require('../models/flight');
const ticket = require('../models/ticket');


module.exports = {
    new: newTicket,
    create,
}


function newTicket(req, res){
    res.render('tickets/new', {id:req.params.id})
}

function create(req, res) {
  console.log('/////////', req.params.id)
    Flight.findById(req.params.id, function(err, flight) {
      console.log('flight._id', flight._id)
        Ticket.create(req.body, function(err, ticket) {
          res.redirect(`/flights/${flight._id}`)
        })

    })
} 