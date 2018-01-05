import React from 'react'

export default ({person, onClick}) => {
  const {isFavorite} = person
  return (
    <button className={isFavorite ? 'btn btn-danger' : 'favoriteHide'}
            onClick={() => onClick(person)}>X
    </button>
  )
}




