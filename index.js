function isItChristmas(date) {
  // Check if the argument is a valid Date object
  if (!(date instanceof Date) || isNaN(date)) {
    throw new Error('Invalid date');
  }

  // Get the month and day of the given date
  const month = date.getMonth(); // Note: getMonth() returns 0-based month (0 for January, 11 for December)
  const day = date.getDate();

  // Check if the month is December (11) and the day is 25
  return month === 11 && day === 25;
}

module.exports = {
  isItChristmas,
};
