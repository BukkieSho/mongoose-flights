import mongoose from 'mongoose'
const Schema = mongoose.Schema

const flightsSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United']
    },
    airport: {
        type: String,
        enum: ['AUS', 'DEN', 'DFW', 'LAX', 'SAN'],
        default: 'DEN'
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: new Date().setFullYear(new Date().getFullYear() + 1)
    },
    tickets: [ticketSchema],

    // secure object reference??

    destinations: [{
        type: Schema.Types.ObjectId, ref: "Destination"
    }]
})

const ticketSchema = new Schema({
    seat: {
        type: String,
        //some Regex for specific selection
        match: /[A-F][1-9]\d?/,
        price: {
            type: Number,
            min: 0
        }
    }
})

const Flight = mongoose.model('Flight', flightsSchema)

export {
    Flight
}