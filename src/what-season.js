const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  /*throw new NotImplementedError('Not implemented');*/
if (date === undefined) {
  return"Unable to determine the time of year!";
}
if (date[Symbol.toStringTag] === 'Date') {
  throw new Error("Invalid date!");
}

  try {

    const season = ["winter", "spring", "summer", "autumn"];
    const month = date.getMonth();

    if (month >= 2 && month <= 4) return season[1];
    if (month >= 5 && month <= 7) return season[2];
    if (month >= 8 && month <= 10) return season[3];
    if (month === 0 || month === 11 || month === 1) return season[0];
    if (Array. isArray (date)) {throw new Error("Invalid date!");}
  } catch {

    throw new Error("Invalid date!");

  }
}

module.exports = {
  getSeason,
};
