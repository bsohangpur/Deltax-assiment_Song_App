const express = require('express');
const app = express();
const dotenv = require('dotenv')
const cors = require("cors");

//configer env environment path.
dotenv.config({
    path:"./Config/config.env"
})

// import multer to storing file here for image.
const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, cd) => {
        cd(null, './uploads');
    },
    filename: (req, file, cd) => {
        cd(null, file.originalname);
    }
})

const upload = multer({ storage })

//export upload function to use on Routes.
module.exports = upload;


//* middleware
app.use(express.json());
const corsConfig = {
    credentials: true,
    origin: true,
};
app.use(cors(corsConfig));
app.use('/uploads', express.static('./uploads'));

//connecting Database
require('./Config/connection')

//Song Routes
const Song = require('./Routes/SongRoutes');
app.use('/song', Song);

//Artist Routes
const Artist = require('./Routes/ArtistRoutes');
app.use('/artist', Artist);

//Search song data Routes
const SongSearch = require('./Routes/SearchRoutes');
app.use('/song', SongSearch);

//Song Rating Routes
const Rating = require('./Routes/ReviewRoutes');
app.use('/song', Rating);

module.exports = app;