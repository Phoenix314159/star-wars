export default (data, term) => {
  let arr = []
  data.map(element => {
    if (element.fields.name.toLowerCase().includes(term, 0)) {
      arr.push(element)
    }
  })
  return arr
}
