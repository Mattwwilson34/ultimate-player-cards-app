const Division = require('../models/division');

const EAST_DIVISION = [
  'New York Empire',
  'Montreal Royal',
  'Ottawa Outlaws',
  'Boston Glory',
  'DC Breeze',
  'Toronto Rush',
  'Philadelphia Phoenix',
];

const CENTRAL_DIVISION = [
  'Chicago Union',
  'Madison Radicals',
  'Indianapolis AlleyCats',
  'Pittsburgh Thunderbirds',
  'Minnesota Wind Chill',
  'Detroit Mechanix',
];

const WEST_DIVISION = [
  'Colorado Summit',
  'Salt Lake Shred',
  'San Diego Growlers',
  'Portland Nitro',
  'Oakland Spiders',
  'LA Aviators',
  'Seattle Cascades',
];

const SOUTH_DIVISION = [
  'Carolina Flyers',
  'Austin Sol',
  'Atlanta Hustle',
  'Dallas Legion',
  'Tampa Bay Cannons',
];

const DIVISIONS = [
  { name: 'South' },
  { name: 'Central' },
  { name: 'East' },
  { name: 'West' },
];

const getDivisionModels = () => {
  const divisionDocsArray = [];
  DIVISIONS.forEach((division) => {
    divisionDocsArray.push(new Division(division));
  });
  return divisionDocsArray;
};

module.exports = {
  getDivisionModels,
  SOUTH_DIVISION,
  EAST_DIVISION,
  CENTRAL_DIVISION,
  WEST_DIVISION,
};
