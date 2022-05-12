const Stat = require('../models/stats');

// Display list of all Stats.
exports.stat_list = function (req, res) {
  res.send('NOT IMPLEMENTED: stat list');
};

// Display detail page for a specific stat.
exports.stat_detail = function (req, res) {
  res.send('NOT IMPLEMENTED: stat detail: ' + req.params.id);
};
