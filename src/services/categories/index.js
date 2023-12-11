import { useEffect, useState } from "react";
import { baseUrl } from "../../utils/axios";

export const useGetFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async()=>{
        try {
            const response = await baseUrl.get(url);
            setData(response.data);
          } catch (error) {
            setError(error);
          } finally {
            setLoading(false);
          }
        };

        useEffect(()=>{
            fetchData()
        },[url])

    return {data, loading, error}
}


export const fetchUrl = async (url)=> {
  try {
    const response = await baseUrl.get(url);
    const { data } =  await response;
    return data;
  } catch (error) {
    return error;
  }
}