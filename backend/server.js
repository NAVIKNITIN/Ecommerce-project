const app = require('./app');
const connectDB = require("./config/database");
const dotenv = require("dotenv")


//setting up config file
dotenv.config({ path: 'backend/config/config.env' })

// connecting to DB
connectDB();


app.listen(process.env.PORT, () => {
    console.log(`server started on Port : ${process.env.PORT} in ${process.env.NODE_ENV} mode.`)
});
``