let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let TeamSchema = new Schema({
  name: { type: String, required: true, maxLength: 100 },
  wins: { type: Number, required: true, min: 0, max: 14 },
  losses: { type: Number, required: true, min: 0, max: 14 },
  points_scored: { type: Number, required: true, min: 0, max: 200 },
  points_against: { type: Number, required: true, min: 0, max: 200 },
  coaches: [{ type: String, required: true, maxLength: 100 }],
  players: [{ type: Schema.Types.ObjectId, ref: 'Player' }],
  division: { type: Schema.Types.ObjectId, ref: 'Division' },
});

TeamSchema.virtual('url').get(function () {
  return `/Teams/${this._id}`;
});

//Export model
module.exports = mongoose.model('Team', TeamSchema);
