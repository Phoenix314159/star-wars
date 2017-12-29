const express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  path = require('path'),
  port = process.env.PORT || 3021

app.use(bodyParser.json())
// app.use('/', express.static(path.join(__dirname, '/client')))
require('./routes/getData')(app)
//<-----production ----->
app.use(express.static(path.join(__dirname, 'client/build')))
app.get('*', (req, res) => {
  res.sendFile((path.join(__dirname, 'client/build/index.html')))
})
//<--------------------->

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
