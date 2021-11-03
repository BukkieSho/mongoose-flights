import { Flight } from "../models/Flight.js"
import { Destination } from "../models/Destination.js"
function newFlight(req, res) {
    res.render('flights/new', {
        title: 'Add a new flight'
    })
}

function create(req, res){
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key]
    }
    const flight = new Flight(req.body)
    flight.save(function(err){
        if (err) {
            console.log('error: ', err)
            return res.redirect('/flights/new')
        }
    })
    res.redirect('/flights')
}


function show(req, res) {
    Flight.findById(req.params.id)
    .populate('destinations')
    .exec (function(err, flight) {
        //Do not fully understand what this next line does. Read more

      Destination.find({_id: {$nin: flight.destinations}}, function(err, destinations) {
        res.render('flights/show', {
          title: 'Flight Details',
          flight,
          destinations
        })
      })
    })
  }


function index(req, res) {
    Flight.find({}, function(err,flights){
        res.render('flights/index', {
            title: 'See All Flights',
            flights
        })
    })
}

function createTicket(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
      console.log("id here", req.params.id)
      console.log('flight', flight)
      console.log(req.body)
      flight.tickets.push(req.body)
      flight.save(function(err) {
        console.log(err)
        res.redirect(`/flights/${flight._id}`)
      })
    })
  }
  
  function addAirport(req, res) {
    Flight.findById(req.params.id, function (err, flight) {
      flight.destinations.push(req.body.destinationId)
      flight.save(function(err) {
        res.redirect(`/flights/${flight._id}`)
      })
    })
  }
export {
    newFlight as new,
    index,
    create,
    show,
    createTicket,
    addAirport
}