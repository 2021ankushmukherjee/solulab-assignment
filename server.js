const app = require("./app");


const dotenv = require("dotenv");


// config path
dotenv.config({path:"config/config.env"})


app.listen(process.env.PORT, ()=>{
    console.log(`server is running successfully`)
});

