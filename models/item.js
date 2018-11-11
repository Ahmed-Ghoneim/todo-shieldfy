const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  item: {type: String, required: '{PATH} is required!'}
});

module.exports = mongoose.model('item', itemSchema);
