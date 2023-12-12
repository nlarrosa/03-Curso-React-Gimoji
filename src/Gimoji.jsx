import { CustomGifcard } from "./components/ui/CustomGifcard";
import { CustomSearch } from "./components/filters/CustomSearch";
import { CustomSelect } from "./components/filters/CustomSelect";
import { useState } from "react";
// import axios from "axios";
// import { reqAxios } from "./config/axiosGiphy";
import { useAxios } from "./hooks/useAxios";



const apiKey = import.meta.env.VITE_APIKEY_GIPHY;

// Crear Hook de Like
// Crear Hook de Favoritos
//Cargar el Loading desde useAxios
//Desarrollar el LoadMore




export const Gimoji = () => {


    const [textSearch, setTextSearch] = useState('animals')
    const limit = 16;
    const urlSearch = `search?api_key=${apiKey}&q=${textSearch}&limit=${limit}&offset=0`;
    const urlCategories = `categories?api_key=${apiKey}`;

    const { dataApi: dataGifs } = useAxios(urlSearch);
    const { dataApi: dataCategories } = useAxios(urlCategories);


    const onChangeData = (event) => {
        setTextSearch(event.target.value);
    }


    const onClickSearch = (text) => {
        setTextSearch(text);
      }
    
    
    return (
    <>
        <div className="container-fluid mt-5">
            <div className="row justify-content-start">
                <div className="col-sm-4">  
                    <CustomSelect 
                        dataOptions={dataCategories}
                        onChangeData={(event) => onChangeData(event)}
                    />
                </div>
                <div className="col-sm-6">
                   <CustomSearch 
                        onClickSearch={(value) => onClickSearch(value)}
                   />
                </div>
            </div>
        </div> 

        <div className="album py-md-5 ">
            <div className="container-fluid">
                <div className="row row-cols-sm-1 row-cols-md-4 g-3">
                    { dataGifs.map( gif => (
                        <CustomGifcard key={gif.id} dataItem={gif}/>
                    ))}
                </div>
                <div className="row mt-5">
                    <button 
                        className='btn btn-outline-primary btn-lg'
                        onClick={() => {}}
                    >CARGAR MAS</button>
                </div>
            </div>
        </div>        
    </>
  )
}
