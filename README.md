# isitchristmas

📋 a teeny-tiny npm module that **returns true if a given date is Christmas** 🎅

#### features:

- one function, isItChristmas, which takes in a JavaScript Date object and returns a boolean if the day is Christmas or not.

#### installation:

`npm i @mikeygough/isitchristmas`

#### example usage:

```javascript
const isItChristmas = require('@mikeygough/isitchristmas');

const date1 = new Date('2024-12-25T00:00:00');
const date2 = new Date('2024-07-04T00:00:00');

console.log(isItChristmas.isItChristmas(date1)); // true
console.log(isItChristmas.isItChristmas(date2)); // false
```

#### gotchas:

time zones matter! when you create a Date object using a string, it interprets the date as being in UTC (Coordinated Universal Time) by default. if your local time zone is behind UTC, the date might be adjusted accordingly.

for example, if you're in a time zone that's UTC-1, creating a date object with new Date('2024-12-25') might actually represent 2024-12-24T23:00:00.000Z, which is still December 24th in your local time zone.

to ensure the date is interpreted correctly in your local time zone, you can specify the date with a time component. see the above example usage.
