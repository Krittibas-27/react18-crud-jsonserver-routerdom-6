import React from 'react'
import Spinner from 'react-bootstrap/Spinner';

const LoadingSpinner = () => {
  return (
    <div className='text-center'>
      <Spinner animation="border" variant="primary" />
    </div>
    
  )
}

export default LoadingSpinner