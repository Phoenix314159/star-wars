export default (people, name) => {
  let arr = []
  people.map(element => {
    const {fields, pk} = element
    if (fields.name === name) {
      arr.push(pk)
    }
  })
  return arr[0]
}
