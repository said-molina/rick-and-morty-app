import React from 'react'
import './styles/LocationInfo.css'

const LocationInfo = ({ location }) => {

   
  return (

    
     <article className='location'>
        <h2 className='location__name'>{location?.name}</h2>
        <div className='location__list-container'>
        <ul className='location__list'>
            <li className='location__item'>
              <span className='location__label'>Type: </span>
              <span className='location__item-value'>{location?.type}</span></li>
            <li className='location__item'>
              <span className='location__label'>Dimension: </span>
              <span className='location__item-value'>{location?.dimension}</span></li>
            <li className='location__item'>
              <span className='location__label'>Population: </span>
              <span className='location__item-value'>{location?.residents.length}</span></li>
        </ul>
        </div>
        
    </article>
    
    
  )
}

export default LocationInfo