const mongoose = require('mongoose');

function dbconfig() {
    try {
       await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
    });

    console.log('database connected')
    }catch(err) {
        console.log(err);
    }
}


module.exports = dbconfig