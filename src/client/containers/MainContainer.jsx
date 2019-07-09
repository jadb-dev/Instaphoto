import React, { useState } from 'react';
import MapContainer from './MapContainer.jsx';
import TitleDisplay from '../components/TitleDisplay.jsx'

const MainContainer = props => {
    const [location, setLocation] = useState('Enter location')
    return (
            <div>
                <TitleDisplay location={props.location}  setLocation = {setLocation}/>
                <MapContainer/>
            </div>
    );
};

export default MainContainer;