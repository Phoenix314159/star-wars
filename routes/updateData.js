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
    for(let i=0; i< data.data.length; i++) {
      const id = data.data[i].pk
      if(data.data[i].fields.isImageUpdated) {
        await People.update({'data.pk': id}, {'$set': {'data.$.fields.isImageUpdated': false}})
      }
    }
    res.send(data)
  })
}
