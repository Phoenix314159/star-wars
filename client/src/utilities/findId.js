export default (people, name) => {
  let arr = []
  people.map(element => {
    if (element.name === name) {
      arr.push(element.id)
    }
  })
  return arr[0]
}
