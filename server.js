const express = require('express');
const mongoose = require('mongoose');
const app = express();


//routes 
app.get('/', (req, res) => {
    res.send("hello Node API")
})


app.get('/blog', (req, res) => {
    res.send("hello Node blog API")
})




mongoose.connect("mongodb+srv://klenamcodes:NAJAT100k@klenamcodesapi.bq3rrhl.mongodb.net/Backend-Assignment?retryWrites=true&w=majority")
.then(()=> {
    console.log("Connected to MongoDB");
    app.listen(3000, () => {
        console.log(`Node API app is running on port 3000`);
    })
 
}) .catch((error) => {
    console.log(error)
})