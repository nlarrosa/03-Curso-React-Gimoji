import React, { useEffect, useId, useRef } from 'react'

export const CustomSearch = ({onClickSearch}) => {

  const id = useId();
  const refInputSearch = useRef();
  const refBtnSearch = useRef();


  useEffect(() => {
    refInputSearch.current.focus();
    refBtnSearch.current.className = 'btn btn-md btn-primary disabled';
  }, []);


  const onChangeSearch = () => {
    if(refInputSearch.current.value.length > 4){
      refBtnSearch.current.className = 'btn btn-md btn-success'
    }
    
  }
  

  return (
      <div className='row'>
        <div className='col-md-10'>
          {/* <label htmlFor={id}>Busca tu gif</label> */}
          <input 
            ref={refInputSearch}
            id={id}
            type="search" 
            className=" form-control input-lg" 
            placeholder="Search..." 
            aria-label="Search"
            onChange={onChangeSearch}
          />
        </div>
        <div className='col-md-2'>
          <button 
            ref={refBtnSearch}
            onClick={() => onClickSearch(refInputSearch.current.value)} 
            className='btn btn-md btn-primary'
          >BUSCAR</button>
        </div>
      </div>
  )
}
