import { CustomGifcard } from "./components/ui/CustomGifcard";
import { CustomSearch } from "./components/filters/CustomSearch";
import { CustomSelect } from "./components/filters/CustomSelect";
import { useState } from "react";
import { useAxios } from "./hooks/useAxios";
import { Loading } from "./components/ui/Loading";
import { usePaginate } from "./hooks/usePaginate";



const apiKey = import.meta.env.VITE_APIKEY_GIPHY;



// Crear Hook de Favoritos
//Desarrollar el Paginado




export const Gimoji = () => {

    // Cuanto gif trae por peeticion
    //limit : 16


    // 
    const [textSearch, setTextSearch] = useState('animals');
    
    
    const limit = 16;
    const pageDatatValueInitial = 1;
    const [pageData, setPageData] = useState(pageDatatValueInitial)
    const { offset, page, onNext, onPrev} =  usePaginate(0, limit, pageData);    
    const urlSearch = `search?api_key=${apiKey}&q=${textSearch}&limit=${limit}&offset=${offset}`;
    const urlCategories = `categories?api_key=${apiKey}`;
    const { dataApi: dataGifs, isLoading } = useAxios(urlSearch);
    const { dataApi: dataCategories } = useAxios(urlCategories);


    const onChangeData = (event) => {
        setTextSearch(event.target.value);
        setPageData(pageDatatValueInitial);
    }


    const onClickSearch = (text) => {
        setTextSearch(text);
        
      }

    
      

    
    if(isLoading){
        return(
            <Loading />
        )
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


                <div className="row mt-5 row-cols-md-3 d-flex justify-content-between align-items-center">
                    <button className='btn btn-outline-primary btn-lg 'onClick={onPrev}> Anterior </button>
                    <h3 className="text-center"> Page: { page } </h3>
                    <button className='btn btn-outline-primary btn-lg'onClick={onNext}> Siguiente </button>
                </div>

                
                {/* <div className="row mt-5">
                    <button 
                        className='btn btn-outline-primary btn-lg'
                        onClick={() => {}}
                    >CARGAR MAS</button>
                </div> */}
            </div>
        </div>        
    </>
  )
}
