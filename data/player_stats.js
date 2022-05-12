const Stat = require('../models/stats');
const getRandomIntInclusive = require('./random_number');

//!----------PLAYER STATS---------//

// Return random player stats object
const getRandomPlayerStats = () => {
  return {
    acceleration: getRandomIntInclusive(20, 100),
    stamina: getRandomIntInclusive(20, 100),
    strength: getRandomIntInclusive(20, 100),
    balance: getRandomIntInclusive(20, 100),
    sprintSpeed: getRandomIntInclusive(20, 100),
    agillity: getRandomIntInclusive(20, 100),
    jumping: getRandomIntInclusive(20, 100),
    marking: getRandomIntInclusive(20, 100),
    deepDef: getRandomIntInclusive(20, 100),
    midDef: getRandomIntInclusive(20, 100),
    handlerDef: getRandomIntInclusive(20, 100),
    shortPass: getRandomIntInclusive(20, 100),
    longPass: getRandomIntInclusive(20, 100),
    skillThrows: getRandomIntInclusive(20, 100),
  };
};

// generate array of player stats objects
const getArrayOfPlayerStats = (numberOfPlayerStats) => {
  const playerStatsArray = [];
  for (let i = 0; i < numberOfPlayerStats; i++) {
    playerStatsArray.push(getRandomPlayerStats());
  }
  return playerStatsArray;
};

// generate array of player stats models
const getArrayOfPlayerStatsModels = (numberOfPlayers) => {
  const playersStatsArray = getArrayOfPlayerStats(numberOfPlayers);
  const playerStatDocsArray = [];
  playersStatsArray.forEach((playerStats) => {
    playerStatDocsArray.push(new Stat(playerStats));
  });
  return playerStatDocsArray;
};

module.exports = getArrayOfPlayerStatsModels;
