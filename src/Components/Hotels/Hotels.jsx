import React from 'react';
import {useSearchParams} from "react-router-dom";
import useFetch from "../../Hooks/useFetch.js";
import IsLoading from "../IsLoading.jsx";

const Hotels = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const destination = searchParams.get("destination");
    const option = JSON.parse(searchParams.get("option"));
    console.log(destination)


    const {isLoading , data} = useFetch('http://localhost:8000/hotels' , `name=${destination || ''} ` ); //accommodates_gte=${option.room || 1}
    console.log(isLoading)
    console.log(data)
    return (

        <div className="hotels-list">
            <h2>result: {data.length}</h2>
            {isLoading ?<IsLoading/>:data.map(item => (
                <HotelCard key={item.id} item={item}/>
            ))}
        </div>
    );
};

export default Hotels;


function HotelCard({item}) {
    console.log(item);
    return (
        <div className="hotels__card">
            <div className="hotel-card__image">
                {/*<img src={item.picture_url.url} alt={item.name}/>*/}
                <img src={'/src/assets/image10.png'} alt={item.name}/>
            </div>
            <div className="hotels-card__description">
                <p className={'text-bold'}>{item.smart_location} </p>
                <p className={'text-transparent'}>{item.name}</p>
                <span>${item.price} <span className={'text-transparent'}>night</span></span>
            </div>
        </div>
    )
}