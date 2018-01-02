export default (data, term) => {
  const arr = []
  data.forEach(element => {
    const {fields: {name}} = element
    if (name.toLowerCase().includes(term, 0)) {
      arr.push(element)
    }
  })
  return arr
}
