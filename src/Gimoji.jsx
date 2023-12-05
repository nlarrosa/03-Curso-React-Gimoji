import { CustomGifcard } from "./components/ui/CustomGifcard";
import { CustomSearch } from "./components/filters/CustomSearch";
import { CustomSelect } from "./components/filters/CustomSelect";
import { useEffect, useState } from "react";


const apiKey = import.meta.env.VITE_APIKEY_GIPHY;
const urlApi = import.meta.env.VITE_URL_API;


export const Gimoji = () => {

    const [dataGimoji, setDataGimoji] = useState([]);
    const [dataCategories, setDataCategories] = useState([]);
    const [search, setSearch] = useState('emojis');
    const [offset, setOffset] = useState(0);
    const limit = 16;

    useEffect(() => {
        getCategories();
        getGimoji();
    }, [search]);


    const onChangeOption = (event) => {
        setSearch(event.target.value);
    }

    const onClickSearch = (newSearch) => {
        setSearch(newSearch);
    }

  


    const getGimoji = async() => {
        const resp = await fetch(`${urlApi}search?api_key=${apiKey}&q=${search}&limit=${limit}&offset=${offset}`);
        const {data} = await resp.json();
        setDataGimoji(data);
    }

    const getCategories = async() => {
        const resp = await fetch(`${urlApi}categories?api_key=${apiKey}`);
        const {data} = await resp.json();
        console.log(data)
        setDataCategories(data)
    }
    
    
    return (
    <>

        <div className="container-fluid mt-5">
            <div className="row justify-content-start">
                <div className="col-sm-4">  
                    <CustomSelect 
                        dataOptions={dataCategories}
                        onChangeOption={onChangeOption}
                    />
                </div>
                <div className="col-sm-6">
                   <CustomSearch  onClickSearch={onClickSearch}/>
                </div>
            </div>
        </div> 
        

        <div className="album py-md-5 ">
            <div className="container-fluid">
                <div className="row row-cols-sm-1 row-cols-md-4 g-3">
                    { dataGimoji.map( gif => (
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
