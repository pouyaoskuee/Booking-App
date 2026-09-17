import {Link, useSearchParams} from "react-router-dom";
import {useHotel} from "../../context/HotelProvider.jsx";
import IsLoading from "../IsLoading.jsx";

const Hotels = () => {
    const {isLoading , data} = useHotel()
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
    return (
        <Link to={`/hotels/${item.id}?lat=${item.latitude}&lang=${item.longitude}`} key={item.id} >
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
        </Link>

    )
}