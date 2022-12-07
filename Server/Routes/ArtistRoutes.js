const express = require('express').Router();
const path = require('path');

//import database to routes.
const ArtistData = require(path.join(__dirname, '../Models/ArtistData'));


/************** CURD Opration **************/

// create artist data
express.post('/data', async (req, res) => {
    // destructuring data from input
    const { name, bio, date_of_birth } = req.body

    try {
        // store data in new artist instance Object
        const Data = new ArtistData(
            {
                name, bio, date_of_birth
            }
        );

        // save the data to Database
        await Data.save();

        res.status(200).send({ "status": "success", "message": "artist is added successfully" })
    }
    catch (e) {
        res.status(401).send({ "status": "failed", "message": "something went wrong" })
    }
})

// read artists data
express.get('/data', async (req, res) => {

    try {
        //find all data from database and send it to server.
        const ArtistRead = await ArtistData.find({})
        res.status(200).send({ "status": "success", "message": "Request for fetching is Accapted", "data": ArtistRead })
    }

    catch (e) {
        res.status(401).send({ "status": "failed", "message": "something went wrong" })
    }

})


// getting artist by id and update the info

express.put('/data/:id', async (req, res) => {
    const { name, bio, date_of_birth } = req.body
    const id = req.params.id;

    try {

            //find artist data from database and update.
            await ArtistData.findByIdAndUpdate(id, {
                name, bio, date_of_birth
            })

            res.status(200).send({ "status": "success", "message": "Data updated successfully" })
    }

    catch (e) {
        res.status(401).send({ "status": "failed", "message": "something went wrong" })
    }
})



//deleting the data by id
express.delete('/data/:id', async (req, res) => {
    try {
        const id = req.params.id
        //find artist data from database and delete it.
        await ArtistData.findByIdAndDelete(id, req.body);

        res.status(200).send({ "status": "success", "message": "data deleted successfully" })

    } catch (e) {
        res.status(401).send({ "status": "failed", "message": "something went wrong" })
    }
})


module.exports = express;