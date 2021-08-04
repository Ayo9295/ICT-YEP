const express = require('express');
const app = express();
const port = 4000;
const router = express.Router();
const userRoute = require('./routes/route')
app.use(express.json());
const db = require('./config/db')

db()

app.get('/', (req, res)=> {
    res.send('page')})


app.use('/user', userRoute)

app.listen (port, () => {
    console.log(`listen on 127.0.0.1 ${port}`)
} )

