import React from 'react';



export const CustomSelect = ({ dataOptions }) => {


  
    
  return (
  
    <select 
      className="form-select" 
      aria-label="Default select example"
      onChange={() => {}}
    >
        <option defaultValue={true}>Selecciona una Categoria</option>
        {dataOptions.map( option => (
          <option key={option.name} value={option.name}>{ option.name }</option>
        ))}

    </select>

  )
}
