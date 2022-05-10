const names = require('./names.js');
const cities = require('./us_cities.js');
const states = require('./us_states.js');
const colleges = require('./colleges.js');
const positions = require('./positions.js');
const teams = require('./teams.js');

// Returns random number
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

//----------PLAYER---------//

// Get random first name
const getRandomFirstName = () => {
  const randomNumber = getRandomIntInclusive(0, names.length);
  return names[randomNumber].first_name;
};

// Get random last name
const getRandomLastName = () => {
  const randomNumber = getRandomIntInclusive(0, names.length);
  return names[randomNumber].last_name;
};

// Get random nickname
const getRandomNickname = () => {
  const randomNumber = getRandomIntInclusive(0, names.length);
  return names[randomNumber].alias;
};

// Get random date of birth
const getRandomDateOfBirth = () => {
  const year = getRandomIntInclusive(1982, 2004);
  const month = getRandomIntInclusive(1, 12);
  const day = getRandomIntInclusive(0, 28); // keeping days in month <= 28 for simplicity
  return new Date(year, month, day);
};

// Get random city
const getRandomCity = () => {
  const randomNumber = getRandomIntInclusive(0, cities.length);
  return cities[randomNumber];
};

// Get random college
const getRandomCollege = () => {
  const randomNumber = getRandomIntInclusive(0, colleges.length);
  return colleges[randomNumber].institution;
};

// Get random position
const getRandomPosition = () => {
  const randomNumber = getRandomIntInclusive(0, positions.length);
  return positions[randomNumber];
};

// Returns random player object
const getRandomPlayer = () => {
  return {
    first_name: getRandomFirstName(),
    first_last: getRandomLastName(),
    DOB: getRandomDateOfBirth(),
    city: getRandomCity(),
    height: getRandomIntInclusive(64, 86), // inches
    weight: getRandomIntInclusive(120, 275), // pounds
    college: getRandomCollege(),
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    position: getRandomPosition(),
    nickname: getRandomNickname(),
  };
};

// generate array of player objects
const getArrayOfPlayerObjects = () => {
  const playerArray = [];
  for (let i = 0; i < 50; i++) {
    playerArray.push(getRandomPlayer());
  }
  console.log(playerArray);
};

//----------PLAYER STATS---------//

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

// generate array of player objects
const getArrayOfPlayerStats = () => {
  const playerStatsArray = [];
  for (let i = 0; i < 50; i++) {
    playerStatsArray.push(getRandomPlayerStats());
  }
  console.log(playerStatsArray);
};

//----------TEAM---------//

// Returns random team object
const getRandomTeam = () => {
  return {
    name: '',
    wins: getRandomIntInclusive(0, 14),
    losses: getRandomIntInclusive(0, 14),
    points: getRandomIntInclusive(0, 200),
    pointsAgainst: getRandomIntInclusive(0, 200),
  };
};

// generate array of team objects
const getArrayOfTeams = () => {
  const teamArray = [];
  for (let i = 0; i < teams.length; i++) {
    const team = getRandomTeam();
    team.name = teams[i];
    teamArray.push(team);
  }
  console.log(teamArray);
};

//----------Division---------//
//todo - save divisions to database
