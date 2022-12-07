const express = require('express').Router();
const path = require("path");
const SongData = require(path.join(__dirname, '../Models/SongData'));

//routes to search song data by any keyword entered

express.post('/search', async (req, res) => {
    const { query } = req.body

    try {
        const title = {
            title: {
                $regex: query,
                $options: "i"
            }
        }
        if (query) {
            const Search = await SongData.find({ ...title })
            res.status(200).send({ status: "success", message: "search result...", data: Search })
        }
        else {
            res.status(401).send({ status: "failed", message: "enter any query to search" })
        }

    } catch (e) {
        res.status(401).send({ status: "failed", message: "server error" })
    }

})

module.exports = express;