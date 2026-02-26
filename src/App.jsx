import { useState } from 'react'
import { Toaster } from 'react-hot-toast';
import './App.css'
import Header from "./Components/Header.jsx";
import LocationList from "./Components/LocationList.jsx";
import {Route , Routes} from "react-router-dom";

function App() {

  return (
    <div className="App">
        <Toaster />
        <Header />
        <Routes>
            <Route path="/" element={<LocationList />} />
            <Route path="/map" element={<Map />} />
        </Routes>
    </div>
  )

}





export default App
