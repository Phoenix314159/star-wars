const mongoose = require('mongoose'),
  People = mongoose.model('people'),
  error = 'an error occurred'

module.exports = app => {

  app.put('/api/update_person', async (req, res) => {
    const {query: {id}, body: {name, image, birth_year, homeworld}} = req, setObj = {}
    try {
      if (name) setObj['data.$.fields.name'] = name
      if (image) setObj['data.$.fields.image'] = image
      if (birth_year) setObj['data.$.fields.birth_year'] = birth_year
      if (homeworld) setObj['data.$.fields.homeworld'] = homeworld
      await People.update({'data.pk': id}, {'$set': setObj})
      res.status(200).send('updated')
    }
    catch (err) {
      console.log(err)
      res.status(500).send(error)
    }
  })
}
