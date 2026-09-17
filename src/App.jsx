import { Toaster } from 'react-hot-toast';
import './App.css'
import Header from "./Components/Header.jsx";
import LocationList from "./Components/LocationList.jsx";
import {Route , Routes} from "react-router-dom";
import AppLayout from "./Components/AppLayout/AppLayout.jsx";
import Hotels from "./Components/Hotels/Hotels.jsx";
import HotelProvider from "./context/HotelProvider.jsx";
import SingleHotel from "./Components/SingleHotel.jsx";

function App() {

  return (
    <div className="App">
        <HotelProvider>
            <Toaster />
            <Header />
            <Routes>
                <Route path="/" element={<LocationList />} />
                <Route path="/hotels" element={<AppLayout />}>
                    <Route index element={<Hotels />}/>
                    <Route path={':id'} element={<SingleHotel/>}/>
                </Route>
            </Routes>
        </HotelProvider>
    </div>
  )

}





export default App
