import React from 'react'

export default ({image, close}) => {
  return (
    <div className='popup'>
      <div className='popup_inner'>
        <h2>{''}</h2>
        <img src={image} height="200px" width="200px" alt=""/>
        <div className="characterInfo">
        </div>
        <button className="btn btn-primary" onClick={() => close()}>OK</button>
      </div>
    </div>
  )
}





