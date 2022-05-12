let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let StatSchema = new Schema({
  acceleration: { type: Number, required: true, min: 20, max: 100 },
  stamina: { type: Number, required: true, min: 20, max: 100 },
  strength: { type: Number, required: true, min: 20, max: 100 },
  balance: { type: Number, required: true, min: 20, max: 100 },
  sprintSpeed: { type: Number, required: true, min: 20, max: 100 },
  agillity: { type: Number, required: true, min: 20, max: 100 },
  jumping: { type: Number, required: true, min: 20, max: 100 },
  marking: { type: Number, required: true, min: 20, max: 100 },
  deepDef: { type: Number, required: true, min: 20, max: 100 },
  midDef: { type: Number, required: true, min: 20, max: 100 },
  handlerDef: { type: Number, required: true, min: 20, max: 100 },
  shortPass: { type: Number, required: true, min: 20, max: 100 },
  longPass: { type: Number, required: true, min: 20, max: 100 },
  skillThrows: { type: Number, required: true, min: 20, max: 100 },
  player: { type: Schema.Types.ObjectId, ref: 'Player' },
});

StatSchema.virtual('url').get(function () {
  return `/stats/${this._id}`;
});

// Export model
module.exports = mongoose.model('Stat', StatSchema);
