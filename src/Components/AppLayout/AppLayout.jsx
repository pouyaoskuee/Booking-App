import React from 'react';
import {Outlet} from "react-router-dom";

const AppLayout = () => {
    return (
        <section>
            <div className="layout">
                <div className="layout__sidbar"><Outlet/></div>
                <div className="layout__map">map</div>
            </div>

        </section>
    );
};

export default AppLayout;