const mongodb = require('mongoose');

const ArtistSchema = new mongodb.Schema({
    name: {
        type: String
    },
    bio: {
        type: String
    },
    
    date_of_birth: { type: Date }
})

module.exports = new mongodb.model('ArtistData', ArtistSchema);