const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const productsRouter = require('./routes/products');
const usersRouter = require('./routes/users');
const db = require('../db');

app
  .use(express.static('public'))
  .use(bodyParser.urlencoded({extended: true}))
  .use('/api', require('./api'))

app.get('/', function(req, res){
  res.sendFile('index.html');
});


const server = app.listen(
  process.env.PORT || 1337,
  () => {
  console.log(`Listening to port ${JSON.stringify(server.address())}`);
})