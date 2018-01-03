import React from 'react'

export default ({image, name, homeWorld, close}) => {
  const checkHome = homeWorld => {
    const {props: {children}} = homeWorld
    return children === 'unknown' ? '' : children
  }
  return (
    <div className='popup'>
      <div className='popup_inner'>
        <h2>{name}</h2>
        <div className="characterPicture">
          <img src={image} height="250px" width="250px" alt=""/>
        </div>
        <div className="characterInfo">
          R2D2 is an R2 series astromech droid manufactured by Industrial Automaton in {checkHome(homeWorld)} and served a multitude of masters over its lifetime.
        </div>
        <div>
          <button className="btn btn-primary" onClick={() => close()}>OK</button>
        </div>
      </div>
    </div>
  )
}





