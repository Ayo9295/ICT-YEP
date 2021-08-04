const mongoose = require('mongoose');

async function dbconfig() {
    try { 
        await mongoose.connect('mongodb+srv://ayo:tommy123@cluster0.elchs.mongodb.net/Project0?retryWrites=true&w=majority',{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        console.log("database connected")
    } catch (err) {
        console.log(err)
    }
}

module.exports = dbconfig