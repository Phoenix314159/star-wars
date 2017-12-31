export default (people, person) => {
  people.splice(people.indexOf(person), 1)
  return people
}
