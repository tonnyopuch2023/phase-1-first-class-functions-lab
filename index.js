// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
  // Test the function
  const driversArray = ['Driver1', 'Driver2', 'Driver3', 'Driver4', 'Driver5'];
  console.log(returnFirstTwoDrivers(driversArray)); // Output: ['Driver1', 'Driver2']

  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  
  // Test the function
  console.log(returnLastTwoDrivers(driversArray)); // Output: ['Driver4', 'Driver5']

  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Test selectingDrivers
console.log(selectingDrivers[0](driversArray)); // Output: ['Driver1', 'Driver2']
console.log(selectingDrivers[1](driversArray)); // Output: ['Driver4', 'Driver5']

const createFareMultiplier = function(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  };
  
  // Test createFareMultiplier
  const fareQuadrupler = createFareMultiplier(4);
  console.log(fareQuadrupler(10)); // Output: 40 (fare * 4)
  
  const fareDoubler = createFareMultiplier(2);

// Test fareDoubler
console.log(fareDoubler(10)); // Output: 20 (fare * 2)

const fareTripler = createFareMultiplier(3);

// Test fareTripler
console.log(fareTripler(10)); // Output: 30 (fare * 3)

const selectDifferentDrivers = function(drivers, returnDriversFunction) {
    return returnDriversFunction(drivers);
  };
  
  // Test selectDifferentDrivers with returnFirstTwoDrivers
  console.log(selectDifferentDrivers(driversArray, returnFirstTwoDrivers)); // Output: ['Driver1', 'Driver2']
  
  // Test selectDifferentDrivers with returnLastTwoDrivers
  console.log(selectDifferentDrivers(driversArray, returnLastTwoDrivers)); // Output: ['Driver4', 'Driver5']
  