const express = require('express');
const userroute = require("./routes/userroute");
const dotenv = require ("dotenv")
const app = express();
const db = require("./config/db")

app.use(express.json());
 db()
app.use("/api/v1/user", userRoutes)
const port = 3000;

app.listen(port,() => {
    console.log(`server on ${port}`)
})