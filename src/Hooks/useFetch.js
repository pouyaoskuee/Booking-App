import {useEffect, useState} from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function  useFetch(Url , Query){
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState([])

    console.log(Query)
    console.log(data)
    
    useEffect(()=>{
        async function fetchData(){
            try {
                setIsLoading(true)
                const response = await axios.get(`${Url}?${Query}`);
                setData(await response.data)
            }catch(err){
                toast.error(err.message)

            }finally {
            setIsLoading(false)
            }



        }


        fetchData()
    }, [Url , Query])

    return {isLoading , data}
}


