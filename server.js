const express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  {mongoUrl, port} = require('./config/dev'),
  mongoose = require('mongoose'),
  path = require('path')

mongoose.connect(mongoUrl)
require('./models/People')
require('./models/Planets')
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => { console.log('Connected To Mongo Database')})
app.use(bodyParser.json())

require('./routes/getData')(app)
//<-----production ----->
// app.use(express.static(path.join(__dirname, 'client/build')))
// app.get('*', (req, res) => {
//   res.sendFile((path.join(__dirname, 'client/build/index.html')))
// })
//<--------------------->

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
