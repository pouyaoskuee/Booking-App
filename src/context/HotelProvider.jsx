import {createContext, useContext} from "react";
import {useSearchParams} from "react-router-dom";
import useFetch from "../Hooks/useFetch.js";


const HotelContext = createContext()

const HotelProvider = ({children}) => {
    const [searchParams, setSearchParams] = useSearchParams()
    const destination = searchParams.get("destination");
    const option = JSON.parse(searchParams.get("option"));


    const {isLoading , data} = useFetch('http://localhost:8000/hotels' , `${destination? `name:contains=${destination} &` :''}${option? `accommodates=${option.room}` : ''}`); //

    return (
        <HotelContext.Provider value={{isLoading , data}} >{children}</HotelContext.Provider>
    );
};

export default HotelProvider;

export function useHotel(){
    return useContext(HotelContext);
}