const mongoose = require('mongoose'),
  People = mongoose.model('people'),
  error = 'an error occurred'
console.log(People)
module.exports = app => {

  app.put('/api/update_person', async (req, res) => {
    try {
      const {query: {id}, body: {name, image, birth_year, homeworld}} = req

      const resp = await People.update(
        {'data.pk': id},
        {'$set': {'data.$.fields.name': name}})

    }
    catch (err) {
      console.log(err)
      res.status(500).send(error)
    }
  })
}
