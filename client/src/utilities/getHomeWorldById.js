export default (planets, id) => {
  const home = []
  planets.forEach((element) => {
    if (element.pk === id) {
      const {fields: {name}} = element
      home.push(name)
    }
  })
  return home[0]
}
