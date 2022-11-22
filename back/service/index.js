const express = require('express');
const mongoose = require('mongoose');
const app = express();
const movieRouter = require('./routes/movieRouter');

const fs = require('fs');
const cors = require('cors');


const jsonParser = express.json();

let corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use('/movie', movieRouter)

app.use(function(request, response, next){
    response.status(404).send('That page not found')
});

mongoose.connect('mongodb://0.0.0.0:27017/pixema', { useUnifiedTopology: true}, function(error){
    if(error) return console.log(error);
    app.listen(3001);
});
