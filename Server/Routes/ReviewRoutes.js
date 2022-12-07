const express = require('express').Router();
const path = require('path');

//import database to routes.
const SongData = require(path.join(__dirname, '../Models/SongData.js'));


//rating Adding function
express.put('/data/rating/add/:id', async (req, res) => {
    //getting perticular song id
    const Id = req.params.id;
    const rating = req.body.rating;
    try {
        await SongData.updateOne(

            { _id: Id }, { $push: { rating } }
        )
        res.status(200).send({ "status": "success", "message": "song rating is added successfully" })

    } catch (e) {
        res.status(401).send({ "status": "failed", "message": "something went wrong" })
    }
})

//rating Delete function
express.put('/data/rating/delete/:id', async (req, res) => {
    //getting perticular song id
    const Id = req.params.id;

    //getting id of perticular rating from same song ratings.
    const id = req.body.id;

    try {
        await SongData.updateOne(

            { _id: Id }, { $pull: { rating: { _id: id } } }
        )

        res.status(200).send({ "status": "success", "message": "song rating is deleted successfully" })

    } catch (e) {
        res.status(401).send({ "status": "failed", "message": "something went wrong" })
    }
})


module.exports = express