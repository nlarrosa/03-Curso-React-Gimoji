import { CustomGifcard } from "./components/ui/CustomGifcard";
import { CustomSearch } from "./components/filters/CustomSearch";
import { CustomSelect } from "./components/filters/CustomSelect";
import { useEffect, useState } from "react";
import axios from "axios";
import { reqAxios } from "./config/axiosGiphy";
import { useAxios } from "./hooks/useAxios";



const apiKey = import.meta.env.VITE_APIKEY_GIPHY;




export const Gimoji = () => {

    // const noImage = 'https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg';
    // const urlApi = 'https://api.giphy.com/v1/gifs/';
    // const [dataGimoji, setDataGimoji] = useState([]);
    // const [dataCategories, setDataCategories] = useState([]);
    const [textSearch, setTextSearch] = useState('animals')
    const limit = 16;
    const urlSearch = `search?api_key=${apiKey}&q=${textSearch}&limit=${limit}&offset=0`;
    const urlCategories = `categories?api_key=${apiKey}`;

    const { dataApi: dataGifs } = useAxios(urlSearch);
    const { dataApi: dataCategories } = useAxios(urlCategories);

    // useEffect(() => {
    //     getGimoji();
    // }, [textSearch]);


    // useEffect(() => {
    //     getCategories();
    // }, [])
    

    //BUsca los Gif en el endpoint cada vez que se modifica el estado de setTextSearch
    // const getGimoji = async() => {
    //     // const resp = await fetch(`${urlApi}search?api_key=${apiKey}&q=${textSearch}&limit=${limit}&offset=0`);
    //     // const {data} = await resp.json();
    //     // setDataGimoji(data);

    //     const resp = await reqAxios.get(`search?api_key=${apiKey}&q=${textSearch}&limit=${limit}&offset=0`);
    //     const { data } = await resp.data
    //     setDataGimoji(data);

        
    // }

    // BUSCA POR UNICA VEZ LAS CATEGORIAS EN EL ENDPOINT
    // const getCategories = async() => {
    //     // const resp = await fetch(`${urlApi}categories?api_key=${apiKey}`);
    //     // const {data} = await resp.json();
    //     // setDataCategories(data)

    //     const resp = await reqAxios.get(`categories?api_key=${apiKey}`);
    //     const {data: dataCateg} = await resp.data
    //     setDataCategories(dataCateg)
    // }

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
