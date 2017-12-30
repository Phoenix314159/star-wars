const mongoose = require('mongoose'),
  { Schema } = mongoose

const peopleSchema = new Schema({}, {collection: 'people-data'})

mongoose.model('people', peopleSchema);
