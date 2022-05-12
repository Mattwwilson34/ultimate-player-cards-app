const Player = require('../models/player');

const names = require('./names.js');
const cities = require('./us_cities.js');
const colleges = require('./colleges.js');
const positions = require('./positions.js');

const getRandomIntInclusive = require('./random_number');

//----------PLAYER---------//

// Get random first name
const getRandomFirstName = () => {
  const randomNumber = getRandomIntInclusive(0, names.length - 1);
  return names[randomNumber].first_name;
};

// Get random last name
const getRandomLastName = () => {
  const randomNumber = getRandomIntInclusive(0, names.length - 1);
  return names[randomNumber].last_name;
};

// Get random nickname
const getRandomNickname = () => {
  const randomNumber = getRandomIntInclusive(0, names.length - 1);
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
  const randomNumber = getRandomIntInclusive(0, cities.length - 1);
  return cities[randomNumber];
};

// Get random college
const getRandomCollege = () => {
  const randomNumber = getRandomIntInclusive(0, colleges.length - 1);
  return colleges[randomNumber].institution;
};

// Get random position
const getRandomPosition = () => {
  const randomNumber = getRandomIntInclusive(0, positions.length - 1);
  return positions[randomNumber];
};

// Returns random player object
const getRandomPlayer = () => {
  return {
    first_name: getRandomFirstName(),
    last_name: getRandomLastName(),
    date_of_birth: getRandomDateOfBirth(),
    home_city: getRandomCity(),
    height: getRandomIntInclusive(64, 86), // inches
    weight: getRandomIntInclusive(120, 275), // pounds
    college: getRandomCollege(),
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    position: getRandomPosition(),
    nickname: getRandomNickname(),
  };
};

// generate array of player objects
const getArrayOfPlayerObjects = (numberOfPlayers) => {
  const playerArray = [];
  for (let i = 0; i < numberOfPlayers; i++) {
    playerArray.push(getRandomPlayer());
  }
  return playerArray;
};

// generate array of player models
const getArrayOfPlayerModels = (numberOfPlayers) => {
  const playersArray = getArrayOfPlayerObjects(numberOfPlayers);
  const playerDocsArray = [];
  playersArray.forEach((player) => {
    playerDocsArray.push(new Player(player));
  });
  return playerDocsArray;
};

module.exports = getArrayOfPlayerModels;
