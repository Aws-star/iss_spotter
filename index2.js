const { fetchMyIP } = require('./iss_promised');
const { fetchCoordsByIP } = require('./iss_promised');
const { fetchISSFlyOverTimes } = require('./iss_promised');
const { nextISSTimesForMyLocation } = require('./iss_promised');

fetchMyIP()
  .then(fetchCoordsByIP)
  .then(fetchISSFlyOverTimes)
  .then(nextISSTimesForMyLocation)
  .then(body => console.log(body));