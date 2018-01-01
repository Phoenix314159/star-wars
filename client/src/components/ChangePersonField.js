import React from 'react'
import ChangeHomeWorld from './ChangeHomeWorld'
import { Link } from 'react-router-dom'
import Spinner from 'react-spinkit'

export default ({people, planets, name, url, newPersonName, newPersonImage, newPersonBirthday,
                  onChange1, onChange2, onChange3, selectedPlanet, handleSubmit, ok, spinner}) => {
  const showOkButton = ok ? 'btn btn-primary' : 'pagHide'
  const showSaveButton = ok ? 'pagHide' : 'btn btn-primary'
  const showCancelButton = ok ? 'pagHide' : 'btn btn-danger'
  // const showSpinner = (showSaveButton === 'pagHide') ? 'spinner' : 'pagHide'
  return(
    <div className="displayCards">
      <div className="card">
        <div className='card-content'>
          <form onSubmit={handleSubmit}>
            <div className="text-center">
              <h4>{name}</h4>
            </div>
            <img src={`/imgs/${url}`} alt='profile' style={{height: '80px', width: '80px'}}/>
            <div className="editPerson">
              <input type="text"
                     className="form-control"
                     name="newPersonName"
                     placeholder="enter a new name"
                     value={newPersonName}
                     onChange={e => onChange1(e)}/>
            </div>
            <div className="editPerson">
              <input type="text"
                     className="form-control"
                     name="newPersonImage"
                     placeholder="enter an image url"
                     value={newPersonImage}
                     onChange={e => onChange2(e)}/>
            </div>
            <div className="editPerson">
              <input type="text"
                     className="form-control"
                     name="newPersonBirthday"
                     placeholder="enter a new birthday"
                     value={newPersonBirthday}
                     onChange={e => onChange3(e)}/>
            </div>
            <div className="editPerson">
              <ChangeHomeWorld className="editPerson" people={people}
                               planets={planets}
                               selectedPlanet={e => selectedPlanet(e)}/>
            </div>
            <div className="editPerson">
              <button className={showSaveButton} type="submit">Save</button>
              <Link to="/main">
                <button className={showCancelButton}>Back</button>
              </Link>
              <Link to="/">
                <button className={showOkButton}>OK</button>
              </Link>
              {/*<Spinner className={showSpinner} name="circle" color="green"/>*/}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}






