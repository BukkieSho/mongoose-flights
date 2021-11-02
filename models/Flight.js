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
        default: new Date(new Date().setFullYear(newDate().getFullYear() +1))
    }
})

const Flight = mongoose.model('Flight', flightsSchema)

export {
    Flight
}