const Division = require('../models/division');

// Display list of all Divisions.
exports.division_list = function (req, res) {
  res.send('NOT IMPLEMENTED: Division list');
};

// Display detail page for a specific Division.
exports.division_detail = function (req, res) {
  res.send('NOT IMPLEMENTED: Division detail: ' + req.params.id);
};
