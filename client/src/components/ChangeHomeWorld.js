import React from 'react'

export default ({planets, selectedPlanet}) => (
  <div>
    <h6>select a new homeworld</h6>
    <select
      className="selectPlanet"
      onChange={e => selectedPlanet(e)}>
      <option value={null}>{''}</option>
      {
        planets.map((planet, i) => {
          const {fields: {name}} = planet
          return <option key={i} value={i}>{name}</option>
        })
      }
    </select>
  </div>
)








