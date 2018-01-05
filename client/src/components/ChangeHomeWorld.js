import React from 'react'

export default ({planets, selectedPlanet}) => {
  const sortedPlanets = planets.sort((a, b) => {  //sort list of planets by name
    const nameA = a.fields.name.toUpperCase(),  // ignore upper and lowercase
      nameB = b.fields.name.toUpperCase()
    return nameA < nameB ? -1 : 1
  })
  return (
    <div>
      <h6>select a new homeworld</h6>
      <select
        className="selectPlanet"
        onChange={e => selectedPlanet(e)}>
        <option value={null}>{''}</option>
        {
          sortedPlanets.map((planet, i) => {
            const {fields: {name}} = planet
            return <option key={i} value={i} className="text-center">{name}</option>
          })
        }
      </select>
    </div>
  )
}








