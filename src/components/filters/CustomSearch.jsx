import React, { useState } from 'react'

export const CustomSearch = () => {



  return (
      <div className='row'>
        <div className='col-md-10'>
          <input 
            type="search" 
            className=" form-control input-lg" 
            placeholder="Search..." 
            aria-label="Search"
            onChange={() => {}}
          />
        </div>
        <div className='col-md-2'>
          <button onClick={() => {}} className='btn btn-md btn-primary'>BUSCAR</button>
        </div>
      </div>
  )
}
