import { useEffect, useState } from 'react'
// import { reqAxios } from '../config/axiosGiphy';
import axios from 'axios';

const urlApi = import.meta.env.VITE_URL_API;

export const reqAxiosHook = axios.create({
    baseURL: urlApi,
    timeout: 12000,
    headers: {
        "Content-Type": 'application/json',
        // 'token': 'kdjsfierwhjerw0893455784598',
    }
});



export const useAxios = (url) => {

    const [dataApi, setDataApi] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        getFetch();
    }, [url])
    

const getFetch = async() => {
    const resp = await reqAxiosHook.get(url);
    const { data } = await resp.data;
    setDataApi(data)
}

  return {
    dataApi,
    isLoading
  }
}
