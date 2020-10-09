const express = require('express');
const parser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;
const component = require('./template.js');


app.use(cors())
app.use(parser.json());
app.use(parser.urlencoded({ extended: true}));
app.use(express.static(__dirname + '/../public'));


app.get('/:id', function(req, res) {  
  res.send(component);  
})


app.listen(port, function() {
  console.log('listening on port :', port);
});


