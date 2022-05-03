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
});

// Virtual for player's full name
PlayerSchema.virtual('name').get(function () {
  let fullname = '';

  // set fullname to combined name if first and last are not null
  if (this.first_name && this.last_name) {
    fullname = `${this.fullname}, ${this.last_name}`;
  }

  // set fullname to empty string if first/last names are null
  if (!this.first_name || !this.last_name) {
    fullname = '';
  }

  return fullname;
});
