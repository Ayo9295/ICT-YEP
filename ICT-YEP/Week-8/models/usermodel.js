const mongoose = require('mogoose')
const { Schema } = mongoose;

const userSchema = new Schema({
 id: String,
 name: String,
 age: String,
 phone: String,
  
});





const user = mongoose.model('Blog', userSchema);


// let user = [
//     { 
//         id : 1, 
//         name : "Gojo",
//         age : 30,
//         phone : +23455546322,
//     },
    
//     {
//         id : 2,
//         name : "satoru",
//         age : 45,
//         phone : +23453564638,
//     },
//     {
//         id : 3,
//         name : "luffy",
//         age  : +23451324343,
//     },
//     {
//         id : 4,
//         name : "zoro",
//         age  : 44,
//         phone : +23454225663,
//     },
//     {
//         id : 5,
//         name : "sanji",
//         age : 22,
//         phone : +23451342145,
//     }]
    
    module.exports = user;