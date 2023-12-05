import React, { useState } from 'react'

export const CustomSearch = ({ onClickSearch }) => {

  const [newSearch, setNewSearch] = useState('');

  const onChangeText = (event) => {
    setNewSearch(event.target.value);
  }

  return (
      <div className='row'>
        <div className='col-md-10'>
          <input 
            type="search" 
            className=" form-control input-lg" 
            placeholder="Search..." 
            aria-label="Search"
            onChange={onChangeText}
          />
        </div>
        <div className='col-md-2'>
          <button onClick={() => onClickSearch(newSearch)} className='btn btn-md btn-primary'>BUSCAR</button>
        </div>
      </div>
  )
}
