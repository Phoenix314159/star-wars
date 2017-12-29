export default (peopleData, planetData) => {
  const arr = peopleData.map(element => {
    return element.homeworld
  })
  const arr2 = []
  for(let i=0; i< arr.length; i++) {
    for(let j=0; j< planetData.length; j++) {
      if(planetData[j].id === arr[i]) {
        arr2.push(planetData[j])
      }
    }
  }
  return arr2
}
