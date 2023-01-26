const mongoose = require("mongoose");

connectDatabase = () => {

    mongoose.connect(process.env.DB_URL)
        .then((data) => {
            console.log("database is connected successfully");
        })
        .catch((err) => {
            console.log(`database not connected for: ${err} `)
        });


}


module.exports = connectDatabase;