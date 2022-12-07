const express = require('express').Router();
const path = require('path');

//import database to routes.
const SongData = require(path.join(__dirname, '../Models/SongData.js'));

//import upload from app to store image file.
const Uploads = require('../app')


/************** CURD Opration **************/

// create song data
express.post('/data', Uploads.array('image'), async (req, res) => {
    // destructuring data from input
    const { title, artist, date_of_release } = req.body
    const { path, originalname } = req.files[0]

    try {
        // store data in new Song instance Object
        const Data = new SongData(
            {
                title, artist, date_of_release,
                image: path,
                imageAlt: originalname
            }
        );

        // save the data to Database
        await Data.save();

        res.status(200).send({ "status": "success", "message": "song is added successfully" })
    }
    catch (e) {
        res.status(401).send({ "status": "failed", "message": "something went wrong" })
    }
})

// read songs data
express.get('/data', async (req, res) => {

    try {
        //find all data from database and send it to server.
        const SongRead = await SongData.find({})
        res.status(200).send({ "status": "success", "message": "Request for fetching is Accapted", "data": SongRead })
    }

    catch (e) {
        res.status(401).send({ "status": "failed", "message": "something went wrong" })
    }

})


// getting song by id and update the info

express.put('/data/:id', Uploads.array('image'), async (req, res) => {
    const { title, artist, date_of_release } = req.body
    const id = req.params.id;

    try {
        //only data are updates
        if ((title || artist || date_of_release ) && req.files.length === 0) {

            //find song data from database and update.
            await SongData.findByIdAndUpdate(id, {
                title, artist, date_of_release
            })

            res.status(200).send({ "status": "success", "message": "Data updated successfully" })
        }

        // all data and file are update.
        else {

            const { path, originalname } = req.files[0]
            //find song data from database and update.
            
            // update file
            await SongData.findByIdAndUpdate(id, {
                image: path,
                imageAlt: originalname
            })
            //update data only
            await SongData.findByIdAndUpdate(id, {
                title, artist, date_of_release
            })
            
            res.status(200).send({ "status": "success", "message": "Data updated with Image successfully" })
        }
    }

    catch (e) {
        res.status(401).send({ "status": "failed", "message": "something went wrong" })
    }
})



//deleting the data by id
express.delete('/data/:id', async (req, res) => {
    try {
        const id = req.params.id
         //find song data from database and delete it.
        await SongData.findByIdAndDelete({_id:id});

        res.status(200).send({ "status": "success", "message": "data deleted successfully" })

    } catch (e) {
        res.status(401).send({ "status": "failed", "message": "something went wrong" })
    }
})


module.exports = express;