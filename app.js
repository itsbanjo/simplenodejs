

const express = require('express');

import {
  HealthcheckerDetailedCheck,
  HealthcheckerSimpleCheck
} from "./healthchecker/healthchecker";
import { Dialects, HealthTypes } from "./interfaces/types";

const app = express();


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


app.get("/health-check/liveness", (_, res) => {
  res.send(HealthcheckerSimpleCheck());
});
