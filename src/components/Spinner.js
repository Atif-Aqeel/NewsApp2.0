import React from 'react'
import loading from './loading.gif'

const Spinner = () => {

  return (
    <div className='text-center'>
      <img className='my-3' src={loading} alt="loading" /><br />
      <h4>loading...</h4>
    </div>
  )
}

export default Spinner