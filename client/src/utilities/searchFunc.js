export default (data, term) => {
  const regEx = new RegExp(term, 'gi')
  return data.filter(element => {
    const {fields: {name}} = element
    return name.replace(/\s/g,'').match(regEx)
  })
}
