import { Flight } from "../models/Flight.js"

function newFlight(req, res) {
    res.render('flights/new', {
        title: 'Add a new flight'
    })
}

function create(req, res){
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key]
    }
    // const flight = new Flight(req.body) come back to this
}

function index(req, res) {
    Flight.find({}, function(err,flights){
        res.render('flights/index', {
            title: 'See All Flights',
            flights
        })
    })
}
export {
    newFlight as new,
    index,
    create
}