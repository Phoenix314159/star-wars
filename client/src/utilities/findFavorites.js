export default people => {
  const arr = []
  people.forEach(element => {
    const {isFavorite} = element
    if (isFavorite) {
      arr.push(element)
    }
  })
  return arr
}

