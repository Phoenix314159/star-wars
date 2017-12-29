export default (subData, page) => {
  return subData.slice((page - 1)* 5, page * 5)
}
