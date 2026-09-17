import React from 'react';
import {useParams} from "react-router-dom";
import useFetch from "../Hooks/useFetch.js";
import IsLoading from "./IsLoading.jsx";

const SingleHotel = () => {
    const {id} = useParams()
    const {isLoading , data} = useFetch(`http://localhost:8000/hotels/${id}`)
    if (isLoading) return <IsLoading/>
    return (
        <div className="singleHotel">
            <h2>{data.name}</h2>
            <div>{data.number_of_reviews} reviews and {data.smart_location}</div>
            {/*<img src={data.xl_picture_url} alt=""/>*/}
            <img src={'/src/assets/image10.png'} />

        </div>
    );
};

export default SingleHotel;