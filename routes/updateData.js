const mongoose = require('mongoose'),
  People = mongoose.model('people'),
  error = 'an error occurred'

module.exports = app => {

  app.put('/api/update_person', async (req, res) => {
    const {query: {id}, body: {name, image, birth_year, homeworld}} = req
    const update = (field, property) => {
      const identifier = `data.$.fields.${property}`
      return People.update({'data.pk': id}, {'$set': {[identifier]: field}})
    }
    try {
      if(name) await update(name, 'name')
      if(image) await update(image, 'image')
      if(birth_year) await update(birth_year, 'birth_year')
      if(homeworld) await update(homeworld, 'homeworld')
    }
    catch (err) {
      console.log(err)
      res.status(500).send(error)
    }
  })
}
