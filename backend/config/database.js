const mongoose = require('mongoose');

const connectDB = () => {
    mongoose.connect(process.env.DB_LOCAL_URI, {
            useNewUrlParser: true,
            useUnifiedTopologyuseUnifiedTopology: true,
            useCreateIndex: true
        })
        .then(con => {
            console.log(`mongo database connected with ${con.connection.host}`);

        })
}
module.exports = connectDB;