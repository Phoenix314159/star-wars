export default people => {
  for(let x in people) {
    if(x.isFavorite) {
      delete x.isFavorite
    }
  }
  return people
}
