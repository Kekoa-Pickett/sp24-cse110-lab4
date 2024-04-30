for (let carType in statistics){
  if (carType.startswith(r) | statistics[carType]%2 == 0){
    console.log(statistics[carType]);
  }
}
