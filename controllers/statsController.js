const Stats = require('../models/stats');

// Display list of all Stats.
exports.stats_list = function (req, res) {
  res.send('NOT IMPLEMENTED: stat list');
};

// Display detail page for a specific stat.
exports.stats_detail = function (req, res) {
  res.send('NOT IMPLEMENTED: stat detail: ' + req.params.id);
};
