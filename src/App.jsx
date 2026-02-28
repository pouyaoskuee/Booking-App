import { Toaster } from 'react-hot-toast';
import './App.css'
import Header from "./Components/Header.jsx";
import LocationList from "./Components/LocationList.jsx";
import {Route , Routes} from "react-router-dom";
import AppLayout from "./Components/AppLayout/AppLayout.jsx";
import Hotels from "./Components/Hotels/Hotels.jsx";

function App() {

  return (
    <div className="App">
        <Toaster />
        <Header />
        <Routes>
            <Route path="/" element={<LocationList />} />
            <Route path="/hotels" element={<AppLayout />}>
                <Route index element={<Hotels />}/>
                <Route path={':id'} element={<div>single hotel</div>}/>
            </Route>
        </Routes>
    </div>
  )

}





export default App
