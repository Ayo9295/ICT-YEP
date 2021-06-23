// const fs = require ('fs')
// const folderName = '/Users/backendclass1/Documents/ICT-YEP/week-4/Test'
// try {
//     if (!fs.existsSync ('test')) {
//         fs.mkdirSync('test');
//     }
// } catch (err) {
//     console.error(err);
// }
const fs = require('fs')
fs.rename('/users/joe', 'users/roger', err => {
// try {
//     fs.renameSync ('/Users/backendclass1/Documents/ICT-YEP/week-4/Test', '/Users/backendclass1/Documents/ICT-YEP/week-4/file')
// }) 
if (err){
    console.error(err)
    return
}
})