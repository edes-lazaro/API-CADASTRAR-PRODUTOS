const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//iniciando app
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));


require('./src/controllers/ProductController')(app);
// require('./src/controllers/UserController')(app);


//iniciando db
mongoose.connect('mongodb://localhost/nodeapi', { useMongoClient: true});
mongoose.Promise = global.Promise;

module.exports = mongoose;

app.listen(3001);