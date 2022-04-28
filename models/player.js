let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let PlayerSchema = new Schema({
  first_name: { type: String, required: true, maxlength: 100 },
  last_name: { type: String, required: true, maxlength: 100 },
  date_of_birth: { type: Date },
  home_city: { type: String, required: true, maxlength: 100 },
  height: { type: Number, required: true },
  weight: { type: Number, required: true },
  college: { type: String, required: true, maxlength: 100 },
  bio: { type: String, maxlength: 1000 },
  position: { type: String, required: true, maxlength: 100 },
  nickname: { type: String, required: true, maxlength: 50 },

  // Virtual for player's full name
});
