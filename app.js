const express = require('express');
const { healthz } = require('express-healthz');
const app = express();


const env = process.env;

app.listen(8080, function() {
  console.log('listening on 8080')
})

app.use(healthz);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
  // Note: __dirname is the current directory you're in. Try logging it and see what you get!
  // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
})

app.post('/quotes', (req, res) => {
  console.log('Hellooooooooooooooooo!')
})
