export default (people, name) => {
  const arr = []
  people.forEach(element => {
    const {fields, pk} = element
    if (fields.name === name) {
      arr.push(pk)
    }
  })
  return arr[0]
}
