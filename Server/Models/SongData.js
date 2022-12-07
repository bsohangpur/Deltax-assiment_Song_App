const mongodb = require('mongoose');

const SongSchema = new mongodb.Schema({
    title: {
        type: String
    },
    artist: {
        type: String
    },
    rating: [{
        name: { type: String },
        email: { type: String },
        rating: { type: Number },
        time: { type: Date, default: Date.now }
        
    }],
    date_of_release: { type: Date, default: Date.now },
    image: [{ type: String }],
    imageAlt: [{ type: String }]
})

module.exports = new mongodb.model('SongData', SongSchema);