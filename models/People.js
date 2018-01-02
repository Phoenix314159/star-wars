const mongoose = require('mongoose'),
  { Schema } = mongoose

const peopleSchema = new Schema({
  data: [
    {
      fields: {
        name: String,
        homeworld: Number,
        birth_year: String,
        image: String,
        newImage: String,
        isImageUpdated: Boolean
      },
      pk: Number
    }
  ]
}, {collection: 'people-data'})

mongoose.model('people', peopleSchema);
