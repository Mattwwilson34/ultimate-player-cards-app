const Player = require('../models/player');

// Display list of all Player.
exports.player_list = function (req, res) {
  res.send('NOT IMPLEMENTED: player list');
};

// Display detail page for a specific player.
exports.player_detail = function (req, res) {
  res.send('NOT IMPLEMENTED: player detail: ' + req.params.id);
};
