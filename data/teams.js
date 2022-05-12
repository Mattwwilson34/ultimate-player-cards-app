const TEAMS = [
  { name: 'Atlanta Hustle' },
  { name: 'Austin Sol' },
  { name: 'Boston Glory' },
  { name: 'Carolina Flyers' },
  { name: 'Chicago Union' },
  { name: 'Colorado Summit' },
  { name: 'Dallas Legion' },
  { name: 'DC Breeze' },
  { name: 'Detroit Mechanix' },
  { name: 'Indianapolis AlleyCats' },
  { name: 'Los Angeles Aviators' },
  { name: 'Madison Radicals' },
  { name: 'Minnesota Wind Chill' },
  { name: 'Montreal Royal' },
  { name: 'New York Empire' },
  { name: 'Oakland Spiders' },
  { name: 'Ottawa Outlaws' },
  { name: 'Philadelphia Phoenix' },
  { name: 'Pittsburgh Thunderbirds' },
  { name: 'Portland Nitro' },
  { name: 'Salt Lake Shred' },
  { name: 'San Diego Growlers' },
  { name: 'Seattle Cascades' },
  { name: 'Tampa Bay Cannons' },
  { name: 'Toronto Rush' },
];

const Team = require('../models/team');
const getRandomIntInclusive = require('./random_number');

//!----------TEAMS---------//

// Returns random team object
const getRandomTeam = (teamName) => {
  return {
    name: teamName,
    wins: getRandomIntInclusive(0, 14),
    losses: getRandomIntInclusive(0, 14),
    points_scored: getRandomIntInclusive(0, 200),
    points_against: getRandomIntInclusive(0, 200),
    coaches: [],
    players: [],
  };
};

// generate random teams array
const getArrayOfRandomTeams = () => {
  const randomTeamsArray = [];
  TEAMS.forEach((team) => {
    randomTeamsArray.push(getRandomTeam(team.name));
  });
  return randomTeamsArray;
};

// generate array of team models
const getArrayOfTeamModels = () => {
  const teams = getArrayOfRandomTeams();
  const arrayOfTeamModels = [];
  teams.forEach((team) => {
    arrayOfTeamModels.push(new Team(team));
  });
  return arrayOfTeamModels;
};

module.exports = { getArrayOfTeamModels, TEAMS };
