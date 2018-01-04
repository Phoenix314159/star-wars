import React from 'react'

export default ({image, name, homeWorld, info, close}) => {
  // info.length === 124
  // const checkHome = homeWorld => {
  //   const {props: {children}} = homeWorld
  //   return children === 'unknown' ? '' : children
  // }
  return (
    <div className='popup'>
      <div className='popup_inner'>
        <div className="popUpContent">
          <h2 className="card-name text-center">{name}</h2>
          <img src={image} className="characterPicture"
               height="250px" width="250px" alt=""/>
          <div className="characterInfo">
              {`${name} ${info}`}
          </div>
          <div className="popUpButton">
            <button className="btn btn-primary" onClick={() => close()}>OK</button>
          </div>
        </div>
      </div>
    </div>
  )
}





