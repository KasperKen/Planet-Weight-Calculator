// Checks if val is a string.
const isString = (val) => typeof val === "string" ? true : false;


// Checks if val is a number.
const isNumber = (val) => typeof val === "number" ? true : false;


// Main Function: Takes in the perameters of a person's weight, and chosen planet before return a persons weight on that planet.
const calculateWeight = (earthWeight, planet) => {
  if (isNumber(earthWeight) && isString(planet)) {
    switch (planet) {
      case 'Mercury':
        return earthWeight * 0.378;
        break;
      case 'Venus':
        return earthWeight * 0.907;
        break;
      case 'Mars':
        return earthWeight * 0.377;
        break;
      case 'Jupiter':
        return earthWeight * 2.36;
        break;
      case 'Saturn':
        return earthWeight * 0.916;
        break;
      default:
        return "Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn."
        break;
    }
  } else return "Invalid Perameters";
};

// Calling the Main Function for testing purposes.
// console.log(calculateWeight(100, 'Jupiter'))
