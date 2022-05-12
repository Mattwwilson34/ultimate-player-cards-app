const express = require('express');
const router = express.Router();

// Require controller modules
const division_controller = require('../controllers/divisionController');
const team_controller = require('../controllers/teamController');
const player_controller = require('../controllers/playerController');
const stats_controller = require('../controllers/statsController');

/// DIVISION ROUTES ///

// GET catalog home page.
router.get('/', division_controller.index);

// GET request for creating a division. NOTE This must come before routes that display division (uses id).
router.get('/division/create', division_controller.division_create_get);

// POST request for creating division.
router.post('/division/create', division_controller.division_create_post);

// GET request to delete division.
router.get('/division/:id/delete', division_controller.division_delete_get);

// POST request to delete division.
router.post('/division/:id/delete', division_controller.division_delete_post);

// GET request to update division.
router.get('/division/:id/update', division_controller.division_update_get);

// POST request to update division.
router.post('/division/:id/update', division_controller.division_update_post);

// GET request for one division.
router.get('/division/:id', division_controller.division_detail);

// GET request for list of all division items.
router.get('/divisions', division_controller.division_list);

/// TEAM ROUTES ///

// GET request for creating team. NOTE This must come before route for id (i.e. display team).
router.get('/team/create', team_controller.team_create_get);

// POST request for creating team.
router.post('/team/create', team_controller.team_create_post);

// GET request to delete team.
router.get('/team/:id/delete', team_controller.team_delete_get);

// POST request to delete team.
router.post('/team/:id/delete', team_controller.team_delete_post);

// GET request to update team.
router.get('/team/:id/update', team_controller.team_update_get);

// POST request to update team.
router.post('/team/:id/update', team_controller.team_update_post);

// GET request for one team.
router.get('/team/:id', team_controller.team_detail);

// GET request for list of all teams.
router.get('/teams', team_controller.team_list);

/// PLAYER ROUTES ///

// GET request for creating a player. NOTE This must come before route that displays player (uses id).
router.get('/player/create', player_controller.player_create_get);

//POST request for creating player.
router.post('/player/create', player_controller.player_create_post);

// GET request to delete player.
router.get('/player/:id/delete', player_controller.player_delete_get);

// POST request to delete player.
router.post('/player/:id/delete', player_controller.player_delete_post);

// GET request to update player.
router.get('/player/:id/update', player_controller.player_update_get);

// POST request to update player.
router.post('/player/:id/update', player_controller.player_update_post);

// GET request for one player.
router.get('/player/:id', player_controller.player_detail);

// GET request for list of all player.
router.get('/players', player_controller.player_list);

/// stats ROUTES ///

// GET request for creating a stats. NOTE This must come before route that displays stats (uses id).
router.get('/stats/create', stats_controller.stats_create_get);

// POST request for creating stats.
router.post('/stats/create', stats_controller.stats_create_post);

// GET request to delete stats.
router.get('/stats/:id/delete', stats_controller.stats_delete_get);

// POST request to delete stats.
router.post('/stats/:id/delete', stats_controller.stats_delete_post);

// GET request to update stats.
router.get('/stats/:id/update', stats_controller.stats_update_get);

// POST request to update stats.
router.post('/stats/:id/update', stats_controller.stats_update_post);

// GET request for one stats.
router.get('/stats/:id', stats_controller.stats_detail);

// GET request for list of all stats.
router.get('/stats', stats_controller.stats_list);

module.exports = router;
