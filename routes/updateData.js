const mongoose = require('mongoose'),
  People = mongoose.model('people'),
  error = 'an error occurred'

module.exports = app => {

  app.put('/api/update_person', async (req, res) => {
    const {query: {id}, body: {name, image, birth_year, homeworld}} = req, setObj = {}
    try {
      if (name) setObj['data.$.fields.name'] = name
      if (image) {
        setObj['data.$.fields.newImage'] = image
        setObj['data.$.fields.isImageUpdated'] = true
      }
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

  app.put('/api/set_images', async (req, res) => {
    const [data] = await People.find({})
    data.data.forEach(async element => {
      const {pk, fields: {isImageUpdated}} = element
      if(isImageUpdated) {
        await People.update({'data.pk': pk}, {'$set': {'data.$.fields.isImageUpdated': false}})
      }
    })
    res.send('pictures updated')
  })
}
