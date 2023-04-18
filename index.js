
const airportsArr = [1,6,3,4,5,0,0,0,6]; // array of airport where each number is represting fuel availabel at airport

const minimumPlanes = (fuelArray) => {
  const n = fuelArray.length; //number of airports
  let currentFuel = fuelArray[0]; // current fuel to the first airport's fuel
  let planesNeeded = 0; //number of planes nedded

  for (let i = 1; i < n; i++) { // looping through all airports except the first one
    currentFuel--;
    if (currentFuel < 0) { // if the current fuel becomes negative,can't reach this airport so returning -1
      return -1;
    }
    if (currentFuel < fuelArray[i]) { // current fuel is not enough to reach the next airport, using another plane
      planesNeeded++;
      currentFuel = fuelArray[i]; //reseting the current fuel to the fuel of the new plane
    }
  }

  return planesNeeded; // returning the number of planes needed to reach the last airport
}

minimumPlanes(airportsArr); // calling function
