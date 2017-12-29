const {readFileSync} = require('fs'),
  peopleData = readFileSync(__dirname + '/peopleData.json'),
  planetData = readFileSync(__dirname + '/planetData.json')


module.exports = app => {
  app.get('/api/get_people_data', (req, res) => {
    res.send(peopleData)
  })

  app.get(' ', (req, res) => {
    res.send(planetData)
  })
}
