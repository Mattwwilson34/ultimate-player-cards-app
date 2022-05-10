function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

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
    skillThrows: getRandomIntInclusive(20, 100)
  };
};

const getRandomTeam = () => {
  return {
    wins: getRandomIntInclusive(0, 14),
    losses: getRandomIntInclusive(0, 14),
    points: getRandomIntInclusive(0, 200),
    pointsAgainst: getRandomIntInclusive(0, 200)
  };
};

console.log(getRandomTeam());
