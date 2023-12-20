import React, { useMemo } from 'react';



export const CustomSelect = ({ dataOptions, onChangeData }) => {


  const getOptions = () => {
    console.log(dataOptions);
    return (
      dataOptions.map( option => (
        <option key={option.name} value={option.name}>{ option.name }</option>
      ))
    )
  }

  const options = useMemo( () => {
       return getOptions();
  },[dataOptions])
  

    
  return (
  
    <select 
      className="form-select" 
      aria-label="Default select example"
      onChange={onChangeData}
    >
        <option defaultValue={true}>Selecciona una Categoria</option>
        {  options }

    </select>

  )
}
