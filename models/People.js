const mongoose = require('mongoose'),
  { Schema } = mongoose

const peopleSchema = new Schema({
  data: [
    {
      fields: {
        name: String,
        homeworld: Number,
        birth_year: String,
        image: String
      },
      pk: Number
    }
  ]
}, {collection: 'people-data'})

mongoose.model('people', peopleSchema);
