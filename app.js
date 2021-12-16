const express = require('express');
const app = express();
const expressHealth = require('express-health-middleware');
app.use(expressHealth());


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

app.use('/', (req, res, next) => {
  res.render('index.pug', { name: env.NAME , age: env.AGE });
});

app.use(bodyParser.json())
app.post("/hook", (req, res) => {
  console.log(req.body) // Call your action on the request here
  res.status(200).end() // Responding is important
})
