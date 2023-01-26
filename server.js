const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./database/database");


// config path
dotenv.config({path:"config/config.env"})

// connection with database
connectDatabase();

app.listen(process.env.PORT, ()=>{
    console.log(`server is running successfully`)
});

