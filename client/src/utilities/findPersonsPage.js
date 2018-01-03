export default (data, person) => {
  let totalArr = [], page
  for (let i = 0; i < data.length; i+=5) {
    totalArr.push(data.slice(i, i + 5))
  }
  for(let i=0; i<totalArr.length; i++) {
    for(let j=0; j< totalArr[i].length; j++) {
      if(totalArr[i][j].pk === person.pk) {
        page = i + 1
      }
    }
  }
  return page
}

