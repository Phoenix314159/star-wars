import React from 'react'
import {Link} from 'react-router-dom'
import ChangeHomeWorld from './ChangeHomeWorld'

export default ({handleSubmit, name, newPersonName, onChange1,
                  newPersonImage, onChange2, newPersonBirthday, url,
                  onChange3, people, planets, selectedPlanet, goHome }) => {
  return (
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
              <button className="btn btn-primary" type="submit">Save</button>
              <Link to="/main">
                <button className="btn btn-danger">Cancel</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}





