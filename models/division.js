let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let DivisionSchema = new Schema({
  name: { type: String, required: true, maxLength: 100 },
  teams: [{ type: Schema.Types.ObjectId, ref: 'Team' }],
});

DivisionSchema.virtual('url').get(function () {
  return `/Divisions/${this._id}`;
});

//Export model
module.exports = mongoose.model('Division', DivisionSchema);
