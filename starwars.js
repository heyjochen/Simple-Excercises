//Get the total shootingScore of force users only.
let personnel = [
    {
      id: 5,
      name: "Luke Skywalker",
      pilotingScore: 98,
      shootingScore: 56,
      isForceUser: true,
    },
    {
      id: 82,
      name: "Sabine Wren",
      pilotingScore: 73,
      shootingScore: 99,
      isForceUser: false,
    },
    {
      id: 22,
      name: "Zeb Orellios",
      pilotingScore: 20,
      shootingScore: 59,
      isForceUser: false,
    },
    {
      id: 15,
      name: "Ezra Bridger",
      pilotingScore: 43,
      shootingScore: 67,
      isForceUser: true,
    },
    {
      id: 11,
      name: "Caleb Dume",
      pilotingScore: 71,
      shootingScore: 85,
      isForceUser: true,
    },
  ];

// Use filter to store only the forceUsers
// return the sum of Scores

function getShootingScore (personnel) {
    const forces = personnel.filter(e => e.isForceUser === true)
    return forces.reduce((total, member) => total + (member.pilotingScore +member.shootingScore),0)
}
getShootingScore(personnel)


// It can be even shorter using reduce with a condition (replacing the filter method) and then summing up the scores

const totalJediScore = personnel.reduce((acc, person) => person.isForceUser ? acc + person.pilotingScore + person.shootingScore : acc, 0);