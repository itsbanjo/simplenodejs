const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());


const env = process.env;

app.listen(8080, function() {
  console.log('listening on 8080')
})


app.get('/q/health', (req, res) => {
  res.send('OK');
})

app.get('/q/ready', (req, res) => {
  res.send('OK');
})

app.get('/', (req, res) => {
  var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress 
  res.send('Hello world' + ip);
})


app.post("/", (req, res) => {
  console.log(req.body) // Call your action on the request here
  res.status(200).end() // Responding is important
})
