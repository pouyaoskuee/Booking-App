import React from 'react';
import useFetch from "../Hooks/useFetch.js";
import IsLoading from "./IsLoading.jsx";

const LocationList = () => {
    const {data, isLoading}=useFetch('http://localhost:8000/hotels')
    console.log(data)
    console.log(isLoading)
    return (
        <section>
            {isLoading ? <IsLoading/>: null}
            <h2>Nearby Locations</h2>
            <div className={'LocationList'} >
                {data.map((item)=>(
                    <Location__card key={item.id} item={item}/>
                ))}
            </div>
        </section>
    );
};

export default LocationList;


function Location__card ({item}) {
    console.log(item)
    return (
        <div className="Location__card">
            <div className="card__img">
                <img src={item.picture_url.url} alt={item.name}/>
            </div>
            <div className="card__description">
                <p>{item.id} </p>
                <p>{item.smart-location} </p>
                <p>{item.name}</p>
                <span>{item.price}</span>
            </div>
        </div>
    )
}

