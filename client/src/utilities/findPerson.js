export default (people, person) => {
  let arr = []
  people.forEach(element => {
    if (element.fields.name === person.fields.name) {
      arr.push(element.fields)
    }
  })
  return arr[0]
}

