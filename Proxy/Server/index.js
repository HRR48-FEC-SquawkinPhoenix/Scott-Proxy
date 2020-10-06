const express = require('express');
const parser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;


app.use(cors())
app.use(parser.json());
app.use(parser.urlencoded({ extended: true}));
app.use(express.static(__dirname + '/../public'));


app.get('/', function(req, res) {  
  res.send('hello');  
})


app.listen(port, function() {
  console.log('listening on port :', port);
});


