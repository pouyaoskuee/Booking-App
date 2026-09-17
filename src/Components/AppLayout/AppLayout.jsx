import {Outlet} from "react-router-dom";
import Map from "../Map.jsx";

const AppLayout = () => {
    return (
            <section className="layout">
                <div className="layout__sidbar"><Outlet/></div>
                <div className={'map__sidbar'}><Map/></div>
            </section>
    );
};

export default AppLayout;