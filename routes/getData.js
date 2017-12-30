const mongoose = require('mongoose'),
  People = mongoose.model('people'),
  Planets = mongoose.model('planets'),
  error = 'an error occurred'


module.exports = app => {

  app.get('/api/get_people_data', async (req, res) => {
    try{
      const [data] = await People.find({})
      res.status(200).send(data)
    }
    catch(err) {
      console.log(err)
      res.status(500).send(error)
    }
  })

  app.get('/api/get_planet_data', async (req, res) => {
    try {
      const [data] = await Planets.find({})
      res.status(200).send(data)
    }
    catch(err) {
      console.log(err)
      res.status(500).send(error)
    }
  })
}
