const Team = require('../models/team');

// Display list of all Teams.
exports.team_list = function (req, res) {
  res.send('NOT IMPLEMENTED: team list');
};

// Display detail page for a specific team.
exports.team_detail = function (req, res) {
  res.send('NOT IMPLEMENTED: team detail: ' + req.params.id);
};
