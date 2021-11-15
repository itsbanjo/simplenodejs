const express = require('express');
const app = express();
const expressHealth = require('express-health-middleware');
app.use(expressHealth());


const env = process.env;

app.listen(8080, function() {
  console.log('listening on 8080')
})


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
  // Note: __dirname is the current directory you're in. Try logging it and see what you get!
  // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
})

app.post('/quotes', (req, res) => {
  console.log('Hellooooooooooooooooo!')
})

app.get('/q/health', (req, res) => {
  res.send('OK');
})

app.get('/q/ready', (req, res) => {
  res.send('OK');
})

