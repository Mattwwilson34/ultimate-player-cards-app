// RUN seedDB FUNTION TO RESEED DB

const mongoose = require('mongoose');

// DB connection
const connectToMongoose = require('../utils/mongoose_connect.js');
connectToMongoose();

// Require models
const Player = require('../models/player');
const Stat = require('../models/stats');
const Team = require('../models/team');
const Division = require('../models/division');

// Require Utility Functions/data
const getArrayOfPlayerModels = require('./players.js');
const getArrayOfPlayerStatsModels = require('./player_stats');
const teams = require('./teams.js');
const divisions = require('./divisions.js');

const seedDB = async () => {
  // Empty Database
  await emptyDB();

  // Get arrays of monogoose models
  let divisionsArray = divisions.getDivisionModels();
  let teamsArray = teams.getArrayOfTeamModels();

  // Set divisions teams and teams division
  teamsArray.forEach((team) => {
    if (divisions.SOUTH_DIVISION.includes(team.name)) {
      divisionsArray[0].teams.push(team);
      team.division = divisionsArray[0];
    } else if (divisions.CENTRAL_DIVISION.includes(team.name)) {
      divisionsArray[1].teams.push(team);
      team.division = divisionsArray[1];
    } else if (divisions.EAST_DIVISION.includes(team.name)) {
      divisionsArray[2].teams.push(team);
      team.division = divisionsArray[2];
    } else if (divisions.WEST_DIVISION.includes(team.name)) {
      divisionsArray[3].teams.push(team);
      team.division = divisionsArray[3];
    }
  });

  // Set teams players and players stats
  teamsArray.forEach(async (team) => {
    let players = getArrayOfPlayerModels(25);
    let statsArray = getArrayOfPlayerStatsModels(25);
    players.forEach((player, i) => {
      team.players.push(player);
      player.stats = statsArray[i]._id;
      player.team = team._id;
      statsArray[i].player = player._id;
    });
    await Player.create(players);
    await Stat.create(statsArray);
  });
  await Team.create(teamsArray);
  await Division.create(divisionsArray);
};

const emptyDB = async () => {
  await Player.deleteMany({});
  await Team.deleteMany({});
  await Stat.deleteMany({});
  await Division.deleteMany({});
};
