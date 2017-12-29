import React from 'react'

export default ({planets, selectedPlanet}) => (
  <div>
    <select
      className="selectPlanet"
      onChange={e => selectedPlanet(e)}>
      {
        planets.map((planet, i) => {
          const {fields: {name}} = planet
          return <option key={i} value={name}>{name}</option>
        })
      }
    </select>
  </div>

)







