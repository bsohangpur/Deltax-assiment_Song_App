const DBConnection = process.env.MONGODBATLES;
const mongodb = require("mongoose");


//connectiong mongoDB database
mongodb.connect(DBConnection, {
    useNewUrlParser: true
}).then(() => {
    console.log("connected to MongoDB sucsessfull")
}).catch((e) => {
    console.log(`Some thing went wrong ${e}`)
})

