const express = require('express');
const app = express();
const port = 7000;
const{v4:uuidv4} =require ('uuid')
const friend = require('./models/friendlist')

app.use(express.json());

app.get('/', (req, res) => {
    res.send ('<h2>E be things</h2>')

})

app.get('/arr', (req, res) => {
    res.json(friend).status(201)
})

 app.post('/arr/add', (req, res) => {
     if (!req.body.name || !req.body.age || !req.body.phone){
         res.status(400).send('u neva finsh')
     }else{
let newfriend ={
    id: uuidv4(),
    name : req.body.name,
    age : req.body.age,
    phone : req.body.phone,
}
    friend.push(newfriend);
    res.json(friend);
     }
 })
 app.get ('/arr/:id', (req, res)=> {
     const {id} = req.params;
     singleFriend = friend.find((singleFriend) => friend.id === number(id))
     if (!singleFriend) {
         return res
               .status(404)
               .json({success: false, message:`no product with id ${id}.`})
     }else {
     return res.status(200).json ({
         success: true,
         data: singleFriend,
     });
     }
    });

    app.listen (port,()=> {
        console.log(`sending on  http://localhost:${port}`)
    });
app.put ('/arr/put', (req, res) =>{
    if (!req.body.name|| req.body.age|| req.body.phone) {
        res.status(403).send('try again');
    }else {
        let friendlist = {
            id: req.params.id,
            name: req.params.name,
            age: req.params.age,
            phone: req.params.phone
        }
        
    }
})
