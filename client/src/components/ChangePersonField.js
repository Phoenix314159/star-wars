import React from 'react'
import ChangeHomeWorld from './ChangeHomeWorld'
import { Link } from 'react-router-dom'

export default ({
                  people, planets, name, image, newPersonName, newPersonImage, newPersonBirthday,
                  handleChange, selectedPlanet, handleSubmit, ok, imageUrl, newImage, isImageUpdated
                }) => {
  const showOkButton = ok ? 'btn btn-primary' : 'pagHide'
  const showSaveButton = ok ? 'pagHide' : 'btn btn-primary'
  const showCancelButton = ok ? 'pagHide' : 'btn btn-danger'
  return (
    <div className="card">
        <div className='card-content'>
          <form onSubmit={handleSubmit}>
            <h4 className="text-center">{name}</h4>
            <img src={isImageUpdated ? newImage : `${imageUrl}/${image}`} alt='image url not found'
                 style={{height: '80px', width: '80px'}}/>
            <input type="text"
                   className="form-control newInputs"
                   placeholder="enter a new name"
                   value={newPersonName}
                   name="newPersonName"
                   onChange={handleChange}
            />
            <input type="text"
                   className="form-control newInputs"
                   name="newPersonImage"
                   placeholder="enter an image url"
                   value={newPersonImage}
                   onChange={handleChange}
            />
            <input type="text"
                   className="form-control newInputs"
                   name="newPersonBirthday"
                   placeholder="enter a new birthday"
                   value={newPersonBirthday}
                   onChange={handleChange}
            />
            <div className="planetSelect">
              <ChangeHomeWorld className="editPerson" people={people}
                               planets={planets}
                               selectedPlanet={e => selectedPlanet(e)}/>
            </div>
            <div className="editButtons">
              <button className={showSaveButton} type="submit">Save</button>
              <Link to="/main">
                <button className={showCancelButton}>Cancel</button>
              </Link>
            </div>
            <div className="okContainer">
              <Link to="/">
                <button className={showOkButton}>OK</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
  )
}






