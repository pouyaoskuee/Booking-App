import React, {useEffect, useState} from 'react';
import {useHotel} from "../context/HotelProvider.jsx";
import {MapContainer, Marker, Popup, TileLayer, useMap} from "react-leaflet";
import {useSearchParams} from "react-router-dom";

const Map = () => {
    const {isLoading , data:hotels} = useHotel();
    const [searchParams , setSearchParams] =  useSearchParams()
    const lat = searchParams.get('lat') || 51.883520
    const lang = searchParams.get('lang') || 8.669215





    return (
        <MapContainer
            center={[lat, lang]}
            zoom={7}
            style={{ height: "100vh", width: "100%" }}

        >

            <TileLayer

                attribution='&copy; OpenStreetMap contributors'

                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

            />
            <MapController center={{lat, lang}}/>
            {hotels.map((hotel) => {
                if (isLoading) return null
                return (
                    <Marker key={hotel.id} position={[hotel.geolocation.lat, hotel.geolocation.lon]}>

                        <Popup>موقعیت من</Popup>

                    </Marker>
                    )

            })}

        </MapContainer>
    );
};

export default Map;

function MapController({ center }) {

    const map = useMap();

    useEffect(() => {

        map.setView([Number(center.lat) , Number(center.lang)]);

    }, [ map , center]);

    return null;

}