const mongoose = require('mongoose'),
  { Schema } = mongoose

const planetSchema = new Schema({}, {collection: 'planet-data'})

mongoose.model('planets', planetSchema);

