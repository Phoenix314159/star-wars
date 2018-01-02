export default (data, person) => {
  for (let i; i < data.length; i++) {
    if (data[i].fields.name === person.fields.name) {
      data.splice(i, 0, person)
    }
  }
  return data
}
