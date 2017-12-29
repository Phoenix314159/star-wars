export default people => {
  const arr = []
  people.map(element => {
    if (element.isFavorite) {
      arr.push(element)
    }
  })
  return arr
}

