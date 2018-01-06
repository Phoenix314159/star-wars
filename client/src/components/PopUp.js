import React from 'react'

export default ({image, name, info, close}) => (
  <div className="popup">
    <div className="animated zoomIn popup_inner">
      <div className="popUpContent">
          <h2 className="card-name text-center">{name}</h2>
          <img src={image} className="characterPicture" alt=""/>
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






