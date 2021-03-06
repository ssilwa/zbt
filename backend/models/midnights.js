var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var midnightSchema = new Schema({
  date: Date,
  zebe: String,
  task: String,
  note: String,
  feedback: String,
  potential: Number,
  awarded: Number,
  reviewed: Boolean,
});

var midnightAccountSchema = new Schema({
  semester: String,
  zebe: String,
  balance: Number,
  requirement: Number,
});

var midnightTypeSchema = new Schema({
  name: String,
  value: Number,
  desc: String,
});


var Midnight = mongoose.model('Midnight', midnightSchema);
var MidnightAccount = mongoose.model('MidnightAccount', midnightAccountSchema);
var MidnightType = mongoose.model('MidnightType', midnightTypeSchema);


// TODO: implement midnight prefs

module.exports = {
  Midnight: Midnight,
  MidnightAccount: MidnightAccount,
  MidnightType: MidnightType,
};