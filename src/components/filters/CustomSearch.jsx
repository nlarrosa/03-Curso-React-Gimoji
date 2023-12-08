import React, { useState } from 'react'

export const CustomSearch = ({onClickSearch}) => {

  const [dataText, setDataText] = useState('');

  const onChangeSearch = (event) => {
    setDataText(event.target.value)
  }

  

  return (
      <div className='row'>
        <div className='col-md-10'>
          <input 
            type="search" 
            className=" form-control input-lg" 
            placeholder="Search..." 
            aria-label="Search"
            // value={}
            onChange={onChangeSearch}
          />
        </div>
        <div className='col-md-2'>
          <button onClick={() => onClickSearch(dataText)} className='btn btn-md btn-primary'>BUSCAR</button>
        </div>
      </div>
  )
}
