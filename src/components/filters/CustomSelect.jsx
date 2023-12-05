import React from 'react';



export const CustomSelect = ({ dataOptions, onChangeOption }) => {


  
    
  return (
  
    <select 
      className="form-select" 
      aria-label="Default select example"
      onChange={(event) => onChangeOption(event)}
    >
        <option defaultValue={true}>Selecciona una Categoria</option>
        {dataOptions.map( option => (
          <option key={option.name} value={option.name}>{ option.name }</option>
        ))}

    </select>

  )
}
