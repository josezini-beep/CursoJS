const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
 if (distanceToPump/fuelLeft<=mpg) {
  return true
 }else{
  return false 
}
};