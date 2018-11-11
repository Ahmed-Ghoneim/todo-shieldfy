const Item = require('../models/item');
const items = require('express').Router();


items.get('/', function(req, res){
  Item.find({}, function(err, items){
    if(err) return res.status(400).json({success: false, msg: err});
    return res.status(200).json({list: items});
  });
});

items.post('/', function(req, res){
  Item.create({item: req.body.item}, function(err, addedItem){
    if(err) return res.status(400).json({success: false, msg: err});
    return res.status(200).json({success: true, msg: 'added!', item: addedItem});
  });
});

items.delete('/', function(req, res){
  Item.findByIdAndDelete(req.body.itemId, function(err, deletedItem){
    if(err) return res.status(400).json({success: false, msg: err});
    return res.status(200).json({success: true, msg: 'deleted!'});
  });
});

module.exports = items;
