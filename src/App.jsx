import { useState,useEffect } from 'react'
import './App.css'
import axios from 'axios'
import getRandomNumber from './utils/getRandomNumber'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'
import FormLocation from './components/FormLocation'


function App() {
  
  const [location, setLocation] = useState()
  const [idLocation, setIdLocation] = useState(getRandomNumber(127))
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  

  useEffect(() => {
    
     const url = `https://rickandmortyapi.com/api/location/${idLocation}`
     setIsLoading(true)
    axios.get(url)
    .then(res => {
      setLocation(res.data)
      setHasError(false)
    })
    .catch(err => {
      console.error(err)
      setHasError(true)
    }
      )
      .finally( () => {
        setIsLoading(false)
      })
    
  }, [idLocation])
  
  

  return (
    <>
      <div>
        <div className='banner-container'>
          <img className='banner-img' src="/rick-morty.png" alt="" />
        </div>
        
        <div className='locationid-container'>
        <FormLocation setIdLocation={setIdLocation}/>
        </div>
        
        {
          isLoading
            ? (<h2>Loading...</h2>)
            : (
              hasError
             ?(<h2>💥Error! you must provide an id from 1-127💥</h2>)
             :(<>
             <div className='location-container'>
             <LocationInfo 
        location = {location}
        />
             </div>
        <div className='resident-container'>
        {
          location?.residents.map(url => (
            <ResidentCard
            key={url}
            url={url}
            />
          ))
        }
      </div>
             </>)
            )
          
        }
        
      </div>
      
    </>
  )
}

export default App
